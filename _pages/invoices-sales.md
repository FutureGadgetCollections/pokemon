---
title: "Sales"
layout: archive
permalink: /invoices/sales/
author_profile: false
classes: wide
---

<style>
  .page-header {
    text-align: center;
    margin-bottom: 2em;
    padding-bottom: 1em;
    border-bottom: 3px solid #2e7d32;
  }

  .page-header h1 {
    color: #2e7d32;
    margin-bottom: 0.5em;
  }

  .page-header p {
    font-size: 1.1em;
    color: #666;
  }

  .spreadsheet-link {
    display: inline-block;
    margin: 1em 0;
    padding: 0.5em 1.5em;
    background-color: #2e7d32;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
  }

  .spreadsheet-link:hover {
    background-color: #1b5e20;
    color: white;
  }

  .controls-section {
    background-color: #f5f5dc;
    padding: 1.5em;
    margin: 2em 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .search-box {
    width: 100%;
    max-width: 500px;
    padding: 0.75em;
    margin-bottom: 1em;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
  }

  .search-box:focus {
    outline: none;
    border-color: #2e7d32;
  }

  .filter-controls {
    margin-top: 1em;
  }

  .filter-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-bottom: 1em;
  }

  .filter-item {
    flex: 1;
    min-width: 200px;
  }

  .filter-item label {
    display: block;
    margin-bottom: 0.25em;
    font-weight: bold;
    color: #333;
  }

  .filter-item select,
  .filter-item input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .button-group {
    display: flex;
    gap: 0.5em;
    margin-top: 1em;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.5em 1.5em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95em;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background-color: #2e7d32;
    color: white;
  }

  .btn-primary:hover {
    background-color: #1b5e20;
  }

  .btn-secondary {
    background-color: #757575;
    color: white;
  }

  .btn-secondary:hover {
    background-color: #616161;
  }

  .btn-export {
    background-color: #1976d2;
    color: white;
  }

  .btn-export:hover {
    background-color: #1565c0;
  }

  .table-container {
    margin: 2em 0;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  table th {
    background-color: #2e7d32;
    color: white;
    padding: 1em;
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  }

  table th:hover {
    background-color: #1b5e20;
  }

  table th.sortable::after {
    content: ' ⇅';
    opacity: 0.5;
  }

  table th.sorted-asc::after {
    content: ' ↑';
    opacity: 1;
  }

  table th.sorted-desc::after {
    content: ' ↓';
    opacity: 1;
  }

  table td {
    padding: 0.75em 1em;
    border-bottom: 1px solid #ddd;
  }

  table tr:hover {
    background-color: #f5f5f5;
  }

  table tr:nth-child(even) {
    background-color: #fafafa;
  }

  #table-info {
    margin: 1em 0;
    padding: 0.75em;
    background-color: #e3f2fd;
    border-left: 4px solid #2196f3;
    border-radius: 4px;
  }

  .loading {
    text-align: center;
    padding: 3em;
    color: #666;
    font-style: italic;
  }

  .error-message {
    padding: 1em;
    background-color: #ffebee;
    border-left: 4px solid #d32f2f;
    color: #c62828;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    .filter-item {
      min-width: 100%;
    }

    .button-group {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>

<div class="page-header">
  <h1>Sale Records</h1>
  <p>All sale transactions for the Pokemon collection</p>
  <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7r5wMRpL4oYi6kauBMwelG9EKnM0EiMCZTYUuYxvZwBUuHW8T2qq9m3sXJhiSsdBpwG2-xulg1co5/pubhtml" class="spreadsheet-link" target="_blank">View Full Spreadsheet</a>
</div>

<div class="controls-section">
  <input type="text" id="search-input" class="search-box" placeholder="Search all columns...">

  <div class="filter-controls">
    <div id="filter-inputs"></div>

    <div class="button-group">
      <button class="btn btn-primary" onclick="applyFilters()">Apply Filters</button>
      <button class="btn btn-secondary" onclick="clearFilters()">Clear Filters</button>
      <button class="btn btn-export" onclick="exportToCSV()">Export to CSV</button>
    </div>
  </div>
</div>

<div id="table-info"></div>

<div class="table-container">
  <div id="sales-table">
    <div class="loading">Loading sale data...</div>
  </div>
</div>

<script src="{{ '/assets/js/sales-loader.js' | relative_url }}"></script>
