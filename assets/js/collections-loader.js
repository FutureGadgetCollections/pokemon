/**
 * Pokemon Collection Inventory Data Loader
 * Fetches data from Google Sheets and calculates cost basis and market value by set
 */

(function() {
  'use strict';

  // Google Sheets URL (convert to CSV format)
  const INVENTORY_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqTUTMWLVPj0czS-ICrfpkH5vbKkrou5f_Jr59DRtmjSD2ogxHPtAP6UJEOBpM9qOwX63zgwCAYyvw/pub?output=csv';

  // Set mapping (normalize set names to match element IDs)
  const SET_MAP = {
    '151': '151',
    'Battle Partners': 'battle-partners',
    'Black Bolt and White Flare': 'black-bolt-and-white-flare',
    'Crown Zenith': 'crown-zenith',
    'Destined Rivals': 'destined-rivals',
    'Fusion Strike': 'fusion-strike',
    'Heat Wave Arena': 'heat-wave-arena',
    'Journey Together': 'journey-together',
    'Mega Evolutions': 'mega-evolutions',
    'Obsidian Flames': 'obsidian-flames',
    'Paldea Evolved': 'paldea-evolved',
    'Paldean Fates': 'paldean-fates',
    'Paradox Rift': 'paradox-rift',
    'Phantasmal Flames': 'phantasmal-flames',
    'Prismatic Evolutions': 'prismatic-evolutions',
    'Scarlet and Violet': 'scarlet-and-violet',
    'Shrouded Fable': 'shrouded-fable',
    'Stellar Crown': 'stellar-crown',
    'Surging Sparks': 'surging-sparks',
    'The Glory of Team Rocket': 'the-glory-of-team-rocket',
    'Twilight Masquerade': 'twilight-masquerade',
    'Vstar Universe': 'vstar-universe'
  };

  /**
   * Parse CSV data into array of objects
   */
  function parseCSV(csvText) {
    const lines = csvText.split('\n');
    if (lines.length === 0) return [];

    const headers = parseCSVLine(lines[0]).map(h => h.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      const values = parseCSVLine(lines[i]);
      const row = {};

      headers.forEach((header, index) => {
        row[header] = values[index] ? values[index].trim() : '';
      });

      // Only add rows with data
      if (Object.values(row).some(val => val !== '')) {
        data.push(row);
      }
    }

    return data;
  }

  /**
   * Parse a single CSV line (handles quoted values with commas)
   */
  function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current);
        current = '';
      } else {
        current += char;
      }
    }

    values.push(current);
    return values.map(v => v.replace(/^"|"$/g, ''));
  }

  /**
   * Normalize set name to element ID
   */
  function normalizeSet(setName) {
    if (!setName) return null;
    const normalized = SET_MAP[setName.trim()];
    return normalized || setName.toLowerCase().replace(/\s+/g, '-');
  }

  /**
   * Format currency value
   */
  function formatCurrency(value) {
    if (isNaN(value) || value === 0) return '$0';
    return '$' + value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }


  /**
   * Parse currency string to number
   */
  function parseCurrency(value) {
    if (!value) return 0;
    const cleaned = value.toString().replace(/[$,]/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }

  /**
   * Calculate cost basis and market value by set from inventory data
   */
  function calculateBySet(inventoryData) {
    const costBySet = {};
    const valueBySet = {};

    inventoryData.forEach(row => {
      // Try different possible column names
      const setName = row['Set'] || row['set'] || row['Product'] || row['product'];
      const set = normalizeSet(setName);

      if (!set) return;

      // Check if we have pre-calculated totals or need to calculate
      const hasTotalInvestment = row['Total Investment'] || row['total investment'] || row['Total Invested'] || row['total invested'];
      const hasTotalMarketValue = row['Total Market Value'] || row['total market value'];

      // Parse cost basis
      let cost;
      if (hasTotalInvestment) {
        // Already a total, don't multiply by quantity
        cost = parseCurrency(hasTotalInvestment);
      } else {
        // Per-unit price, will need to multiply by quantity
        cost = parseCurrency(
          row['Cost Basis'] ||
          row['cost basis'] ||
          row['Cost'] ||
          row['cost'] ||
          0
        );
      }

      // Parse market value
      let marketValue;
      if (hasTotalMarketValue) {
        // Already a total, don't multiply by quantity
        marketValue = parseCurrency(hasTotalMarketValue);
      } else {
        // Per-unit price, will need to multiply by quantity
        marketValue = parseCurrency(
          row['Market Value'] ||
          row['market value'] ||
          row['Estimated Value'] ||
          row['estimated value'] ||
          row['Value'] ||
          row['value'] ||
          0
        );
      }

      // Parse quantity (only needed if we don't have totals)
      const quantity = parseInt(
        row['Quantity'] ||
        row['quantity'] ||
        row['Total Quantity'] ||
        row['total quantity'] ||
        '1',
        10
      );

      // Initialize if needed
      if (!costBySet[set]) {
        costBySet[set] = 0;
      }
      if (!valueBySet[set]) {
        valueBySet[set] = 0;
      }

      // Add to totals (multiply by quantity only if not already a total)
      if (hasTotalInvestment) {
        costBySet[set] += cost;
      } else {
        costBySet[set] += cost * (quantity || 1);
      }

      if (hasTotalMarketValue) {
        valueBySet[set] += marketValue;
      } else {
        valueBySet[set] += marketValue * (quantity || 1);
      }
    });

    return { costBySet, valueBySet };
  }

  /**
   * Update DOM with calculated values
   */
  function updateUI(costBySet, valueBySet) {
    // Update each set's statistics
    Object.keys(SET_MAP).forEach(setName => {
      const setId = SET_MAP[setName];
      const cost = costBySet[setId] || 0;
      const value = valueBySet[setId] || 0;

      // Update cost basis
      const costElement = document.getElementById(`${setId}-cost`);
      if (costElement) {
        costElement.textContent = formatCurrency(cost);
        costElement.classList.remove('loading-stat');
      }

      // Update market value
      const valueElement = document.getElementById(`${setId}-value`);
      if (valueElement) {
        valueElement.textContent = formatCurrency(value);
        valueElement.classList.remove('loading-stat');
      }
    });
  }

  /**
   * Fetch and process all data
   */
  async function loadData() {
    try {
      // Fetch inventory spreadsheet
      const response = await fetch(INVENTORY_CSV);
      const csvText = await response.text();

      // Parse CSV data
      const inventoryData = parseCSV(csvText);

      // Calculate values by set
      const { costBySet, valueBySet } = calculateBySet(inventoryData);

      // Update UI
      updateUI(costBySet, valueBySet);

    } catch (error) {
      console.error('Error loading collection data:', error);

      // Update all loading elements to show error
      Object.values(SET_MAP).forEach(setId => {
        const costElement = document.getElementById(`${setId}-cost`);
        const valueElement = document.getElementById(`${setId}-value`);

        if (costElement) {
          costElement.textContent = 'Error';
          costElement.style.color = '#d32f2f';
        }
        if (valueElement) {
          valueElement.textContent = 'Error';
          valueElement.style.color = '#d32f2f';
        }
      });
    }
  }

  // Load data when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }

})();
