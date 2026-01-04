---
permalink: /portfolio-summary/
title: "Portfolio Summary"
layout: archive
author_profile: false
classes: wide
---

<style>
  .summary-header {
    text-align: center;
    margin-bottom: 2em;
  }

  .summary-header h1 {
    margin-bottom: 0.5em;
  }

  .summary-header p {
    font-size: 1.1em;
    color: #666;
  }

  .profile-link {
    display: inline-block;
    margin: 1em 0;
    padding: 0.5em 1em;
    background-color: #0066cc;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }

  .profile-link:hover {
    background-color: #0052a3;
  }

  .analysis-section {
    margin: 2em 0;
  }

  .analysis-section h2 {
    border-bottom: 2px solid #0066cc;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }

  table th {
    background-color: #f0f0f0;
    padding: 0.75em;
    text-align: left;
    font-weight: bold;
    border: 1px solid #ddd;
  }

  table td {
    padding: 0.75em;
    border: 1px solid #ddd;
  }

  table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  table tr:hover {
    background-color: #f0f0f0;
  }

  .loading {
    text-align: center;
    padding: 2em;
    color: #666;
    font-style: italic;
  }
</style>

<div class="summary-header">
  <h1>Pokemon Portfolio Summary</h1>
  <p>Track investment performance and collection value</p>
  <a href="https://app.getcollectr.com/showcase/profile/be47c36e-c7ad-4dc2-8192-29739ac66463" class="profile-link" target="_blank">View Collectr Profile</a>
</div>

<div class="analysis-section">
  <h2>Cash Flow Analysis</h2>
  <p>Cash flow data is sourced from <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRlWGg5zNe61az3S_-gylZCxhEEds98dIx8KvA_gA2bJrlaCSGfEWBFzbTcvPiyRxdR4y0_hfUlGZfA/pubhtml?gid=0&single=true" target="_blank">this Google Sheet</a>.</p>
  <div id="cash-flow-table">
    <div class="loading">Loading cash flow data...</div>
  </div>
</div>

<div class="analysis-section">
  <h2>IRR (Internal Rate of Return) Analysis</h2>
  <p>IRR details are sourced from <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRlWGg5zNe61az3S_-gylZCxhEEds98dIx8KvA_gA2bJrlaCSGfEWBFzbTcvPiyRxdR4y0_hfUlGZfA/pubhtml?gid=548434745&single=true" target="_blank">this Google Sheet</a>.</p>
  <div id="irr-table">
    <div class="loading">Loading IRR data...</div>
  </div>
</div>

<script src="{{ '/assets/js/portfolio-loader.js' | relative_url }}"></script>
