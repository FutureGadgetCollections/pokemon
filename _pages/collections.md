---
title: "Collection Inventory"
layout: single
permalink: /collection/
author_profile: false
classes: wide
---

<style>
  /* Make the page extra wide */
  .page {
    max-width: 100% !important;
    padding: 0 2em !important;
  }

  .page__content {
    max-width: 100% !important;
  }

  .collection-header {
    text-align: center;
    margin-bottom: 2em;
  }

  .collection-header h1 {
    color: #1a1a1a;
    margin-bottom: 0.5em;
  }

  .collection-header p {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 1.5em;
  }

  .collection-links {
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2em;
  }

  .collection-link {
    display: inline-block;
    padding: 0.75em 1.5em;
    background-color: #1a1a1a;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .collection-link:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    color: white;
  }

  .collections-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    margin: 2em 0;
  }

  .collection-card {
    background-color: #f5f5dc;
    border: 3px solid #000;
    border-radius: 8px;
    padding: 1.5em;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .collection-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    cursor: pointer;
  }

  .collection-card-image {
    width: 100%;
    height: 200px;
    border-radius: 4px;
    margin-bottom: 1em;
    overflow: hidden;
  }

  .collection-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .collection-card h3 {
    margin: 0.5em 0;
    color: #1a1a1a;
    font-size: 1.5em;
  }

  .collection-card p {
    color: #666;
    margin-bottom: 1em;
  }

  .collection-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 2px solid #ddd;
  }

  .stat-item {
    text-align: center;
  }

  .stat-label {
    font-size: 0.85em;
    color: #666;
    margin-bottom: 0.25em;
    font-weight: bold;
  }

  .stat-value {
    font-size: 1.25em;
    color: #1a1a1a;
    font-weight: bold;
  }

  .loading-stat {
    color: #999;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .collections-grid {
      grid-template-columns: 1fr;
    }

    .collection-links {
      flex-direction: column;
    }

    .collection-link {
      width: 100%;
      text-align: center;
    }
  }
</style>

<div class="collection-header">
  <h1>Pokemon Card Collection</h1>
  <p>Browse your collection by set and track inventory values</p>

  <div class="collection-links">
    <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQqTUTMWLVPj0czS-ICrfpkH5vbKkrou5f_Jr59DRtmjSD2ogxHPtAP6UJEOBpM9qOwX63zgwCAYyvw/pubhtml" class="collection-link" target="_blank">View Full Inventory</a>
    <a href="https://app.getcollectr.com/showcase/profile/be47c36e-c7ad-4dc2-8192-29739ac66463" class="collection-link" target="_blank">View on Collectr</a>
  </div>
</div>

<div class="collections-grid">
  <a class="collection-card" href="/pokemon/collection/paldean-fates/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/paldean-fates.jpg" alt="Paldean Fates">
    </div>
    <h3>Paldean Fates</h3>
    <p>Special set featuring Shiny Pokemon and unique artwork from the Paldea region</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="paldean-fates-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="paldean-fates-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/surging-sparks/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/surging-sparks.jpg" alt="Surging Sparks">
    </div>
    <h3>Surging Sparks</h3>
    <p>Latest expansion featuring powerful Electric-type Pokemon and stellar cards</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="surging-sparks-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="surging-sparks-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/151/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/151.jpg" alt="151">
    </div>
    <h3>151</h3>
    <p>Celebrating the original 151 Pokemon with nostalgic artwork and beloved characters</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="151-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="151-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/battle-partners/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/battle-partners.jpg" alt="Battle Partners">
    </div>
    <h3>Battle Partners</h3>
    <p>Expansion showcasing powerful partnerships between trainers and Pokemon</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="battle-partners-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="battle-partners-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/black-bolt-and-white-flare/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/black-bolt-and-white-flare.png" alt="Black Bolt and White Flare">
    </div>
    <h3>Black Bolt and White Flare</h3>
    <p>Dual set featuring legendary Pokemon and striking black and white themed cards</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="black-bolt-and-white-flare-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="black-bolt-and-white-flare-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/crown-zenith/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/crown-zenith.png" alt="Crown Zenith">
    </div>
    <h3>Crown Zenith</h3>
    <p>Special subset featuring Galarian Gallery and unique artwork showcasing Galar region Pokemon</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="crown-zenith-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="crown-zenith-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/destined-rivals/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/destined-rivals.jpg" alt="Destined Rivals">
    </div>
    <h3>Destined Rivals</h3>
    <p>Epic battles between rival trainers and their signature Pokemon</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="destined-rivals-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="destined-rivals-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/fusion-strike/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/fusion-strike.jpg" alt="Fusion Strike">
    </div>
    <h3>Fusion Strike</h3>
    <p>Expansion featuring Fusion Strike Pokemon with powerful combination attacks</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="fusion-strike-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="fusion-strike-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/heat-wave-arena/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/heat-wave-arena.jpg" alt="Heat Wave Arena">
    </div>
    <h3>Heat Wave Arena</h3>
    <p>Featuring fire-type Pokemon and intense competitive battle scenes</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="heat-wave-arena-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="heat-wave-arena-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/journey-together/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/journey-together.jpg" alt="Journey Together">
    </div>
    <h3>Journey Together</h3>
    <p>Celebrating the bond between trainers and Pokemon on their adventures</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="journey-together-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="journey-together-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/mega-evolutions/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/mega-evolutions.jpg" alt="Mega Evolutions">
    </div>
    <h3>Mega Evolutions</h3>
    <p>Showcasing powerful Mega Evolution transformations and abilities</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="mega-evolutions-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="mega-evolutions-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/obsidian-flames/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/obsidian-flames.jpg" alt="Obsidian Flames">
    </div>
    <h3>Obsidian Flames</h3>
    <p>Dark and fiery expansion featuring dramatic artwork and rare cards</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="obsidian-flames-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="obsidian-flames-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/paldea-evolved/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/paldea-evolved.jpg" alt="Paldea Evolved">
    </div>
    <h3>Paldea Evolved</h3>
    <p>Evolution-focused set from the Paldea region with stunning evolved forms</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="paldea-evolved-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="paldea-evolved-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/paradox-rift/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/paradox-rift.jpg" alt="Paradox Rift">
    </div>
    <h3>Paradox Rift</h3>
    <p>Featuring mysterious Paradox Pokemon from different timelines</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="paradox-rift-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="paradox-rift-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/phantasmal-flames/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/phantasmal-flames.jpg" alt="Phantasmal Flames">
    </div>
    <h3>Phantasmal Flames</h3>
    <p>Mystical set combining ghost and fire-type Pokemon with ethereal artwork</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="phantasmal-flames-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="phantasmal-flames-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/prismatic-evolutions/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/prismatic-evolutions.jpg" alt="Prismatic Evolutions">
    </div>
    <h3>Prismatic Evolutions</h3>
    <p>Special set featuring Eevee evolutions with prismatic rainbow artwork</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="prismatic-evolutions-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="prismatic-evolutions-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/scarlet-and-violet/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/scarlet-and-violet.jpg" alt="Scarlet and Violet">
    </div>
    <h3>Scarlet and Violet</h3>
    <p>Base set introducing the Paldea region with new Pokemon and mechanics</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="scarlet-and-violet-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="scarlet-and-violet-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/shrouded-fable/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/shrouded-fable.jpg" alt="Shrouded Fable">
    </div>
    <h3>Shrouded Fable</h3>
    <p>Mysterious expansion featuring legendary tales and mythical Pokemon</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="shrouded-fable-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="shrouded-fable-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/stellar-crown/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/stellar-crown.jpg" alt="Stellar Crown">
    </div>
    <h3>Stellar Crown</h3>
    <p>Royal-themed set featuring crowned Pokemon and stellar rare cards</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="stellar-crown-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="stellar-crown-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/the-glory-of-team-rocket/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/the-glory-of-team-rocket.jpg" alt="The Glory of Team Rocket">
    </div>
    <h3>The Glory of Team Rocket</h3>
    <p>Celebrating the iconic villains with Team Rocket themed cards and artwork</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="the-glory-of-team-rocket-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="the-glory-of-team-rocket-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/twilight-masquerade/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/twilight-masquerade.jpg" alt="Twilight Masquerade">
    </div>
    <h3>Twilight Masquerade</h3>
    <p>Elegant masquerade-themed expansion with mysterious masked Pokemon</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="twilight-masquerade-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="twilight-masquerade-value">Loading...</div>
      </div>
    </div>
  </a>

  <a class="collection-card" href="/pokemon/collection/vstar-universe/">
    <div class="collection-card-image">
      <img src="{{ site.baseurl }}/assets/images/themes/vstar-universe.jpg" alt="Vstar Universe">
    </div>
    <h3>Vstar Universe</h3>
    <p>Special set showcasing VSTAR Pokemon with cosmic and universe themes</p>
    <div class="collection-stats">
      <div class="stat-item">
        <div class="stat-label">Cost Basis</div>
        <div class="stat-value loading-stat" id="vstar-universe-cost">Loading...</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Market Value</div>
        <div class="stat-value loading-stat" id="vstar-universe-value">Loading...</div>
      </div>
    </div>
  </a>
</div>

<script src="{{ '/assets/js/collections-loader.js' | relative_url }}"></script>
