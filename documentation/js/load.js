/* global window, cy, options, document */
loadCy = function(){

//<demo>

// initialise cytoscape.js on a html dom element with some options:
cy = cytoscape( options = {
  container: document.getElementById('cy'),

  minZoom: 0.5,
  maxZoom: 2,

  // style can be specified as plain JSON, a stylesheet string (probably a CSS-like
  // file pulled from the server), or in a functional format
  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(name)',
        'font-family': 'helvetica',
        'font-size': 14,
        'text-outline-width': 3,
        'text-outline-color': '#999',
        'text-valign': 'center',
        'color': '#fff',
        'width': 'mapData(weight, 30, 80, 20, 50)',
        'height': 'mapData(height, 0, 200, 10, 45)',
        'border-color': '#fff'
      }
    },

    {
      selector: ':selected',
      css: {
        'background-color': '#000',
        'line-color': '#000',
        'target-arrow-color': '#000',
        'text-outline-color': '#000'
      }
    },

    {
      selector: 'edge',
      css: {
        'width': 2,
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    },

    {
      selector: '.foo',
      css: {
        'border-width': 4,
        'border-color': 'red'
      }
    }
  ],

  // specify the elements in the graph
  elements: {
    nodes: [
      { data: { id: 'j', name: 'Jerry', weight: 65, height: 174 } },
      { data: { id: 'e', name: 'Elaine', weight: 48, height: 160 } },
      { data: { id: 'k', name: 'Kramer', weight: 75, height: 185 } },
      { data: { id: 'g', name: 'George', weight: 70, height: 150 } }
    ],

    edges: [
      { data: { source: 'j', target: 'e', id: 'je', closeness: 0.85 } },
      { data: { source: 'j', target: 'k', id: 'jk', closeness: 0.5 } },
      { data: { source: 'j', target: 'g', id: 'jg', closeness: 0.7 } },

      { data: { source: 'e', target: 'j', id: 'ej', closeness: 0.9 } },
      { data: { source: 'e', target: 'k', id: 'ek', closeness: 0.6 } },

      { data: { source: 'k', target: 'j', id: 'kj', closeness: 0.9 } },
      { data: { source: 'k', target: 'e', id: 'ke', closeness: 0.9 } },
      { data: { source: 'k', target: 'g', id: 'kg', closeness: 0.9 } },

      { data: { source: 'g', target: 'j', id: 'gj', closeness: 0.8 } }
    ],
  },


  ready: function(){
    // when layout has set initial node positions etc
  }
} );

//</demo>

};

loadCy();