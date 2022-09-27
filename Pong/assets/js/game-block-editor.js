(()=> {
    //create-guten-block >> bibliothèque de création de block wp
    const el = wp.element.createElement;
    const iconEl = el('svg', { width: 20, height: 20 },
    el('path', { d: "M80 320c0-11 5-19 12-17 6 1 14-6 16-15 2-11-2-18-12-18-9 0-16-6-16-14 0-7-9-16-20-19s-20-12-20-21-8-16-21-16c-18 0-20-5-17-52 2-41 7-54 20-56 15-3 18 4 18 32 0 29 4 36 20 36s20-7 20-35c0-24 5-35 15-35 8 0 15-7 15-15 0-10 11-15 35-15s35 5 35 15-11 15-35 15c-28 0-35 4-35 20 0 19 7 20 90 20s90-1 90-20c0-16-7-20-35-20-24 0-35-5-35-15s11-15 35-15 35 5 35 15c0 8 7 15 15 15 10 0 15 11 15 35 0 28 4 35 20 35s20-7 20-36c0-28 3-35 18-32 13 2 18 15 20 56 3 46 1 52-16 52-11 0-22 9-25 20s-12 20-21 20-16 7-16 15-7 15-16 15c-10 0-14 7-12 18 2 9 10 16 16 15 7-2 12 6 12 17s-7 20-15 20-15-7-15-15-9-15-20-15c-13 0-20-7-20-20 0-17-7-20-50-20s-50 3-50 20c0 13-7 20-20 20-11 0-20 7-20 15s-7 15-15 15-15-9-15-20zm68-103c2-12-3-17-17-17-12 0-21 6-21 13 0 31 32 34 38 4zm140 0c2-12-3-17-17-17-12 0-21 6-21 13 0 31 32 34 38 4z", transform:"matrix(.1 0 0 -.1 0 40)" } )
  );
    wp.blocks.registerBlockType("pong-game/mygame", {
      title: "Pong game",
      icon: iconEl,
      category: "widgets",
      attributes: {
      cWidth: {
        type: "number"
      },
      cHeight: {
        type: "number"
      },
      textStart : {
        type: "string"
      }, 
      textGameover : {
        type: "string"
      }, 
      color : {
        type: "string"
      }, 
      
      },
      edit: function (props) {
        const modalButtons = document.querySelectorAll("[data-toggle=modal]");
    
        for(let button of modalButtons){
            button.addEventListener("click", function(e){
                // On empêche la navigation
                e.preventDefault();
                // On récupère le data-target
                let target = this.dataset.target
                
                // On récupère la bonne modale
                let modal = document.querySelector(target);
                // On affiche la modale
                modal.classList.add("show");
    
                // On récupère les boutons de fermeture
                const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
                
                for(let close of modalClose){
                    close.addEventListener("click", () => {
                        modal.classList.remove("show");
                    });
                }
    
                // On gère la fermeture lors du clic sur la zone grise
                modal.addEventListener("click", function(){
                    this.classList.remove("show");
                });
                // On évite la propagation du clic d'un enfant à son parent
                modal.children[0].addEventListener("click", function(e){
                    e.stopPropagation();
                })
            });
        }


        let container = document.querySelector('.game-container');
        function initContainerWidth(){
          // container.style.width = props.attributes.cWidth+'px';
          console.log('prout');
        }

        function updateCanvasWidth(e) {
          props.setAttributes({ cWidth: parseInt(e.target.value) });
          container.style.width = (e.target.value/2)+'px';
        }
        function updateCanvasHeight(e) {
          props.setAttributes({ cHeight: parseInt(e.target.value) });
          container.style.height = (e.target.value/2)+'px';
        }
        function updatetextStart(e) {
          props.setAttributes({ textStart: e.target.value });
        }
        function updatetextGameover(e) {
          props.setAttributes({ textGameover: e.target.value});
        }
        function updatebackColor(value) {
          props.setAttributes({ color: value.hex });
          container.style.background = value.hex;
        }
          
        return wp.element.createElement(
          "div",
          {class: 'bigGameContainer'
        },
          wp.element.createElement("div", {
            class: "game-container",
            style: {width: (props.attributes.cWidth/2)+'px', height: (props.attributes.height/2)+'px'}
          }, wp.element.createElement("p", {
            class: "gameStart",
          }, wp.element.createElement("span", null, props.attributes.textStart ? props.attributes.textStart : "Press Any key to begin"))),
          React.createElement("button", {
            "data-toggle": "modal",
            "data-target": "#modal-1"
          }, "Settings"),
          wp.element.createElement(
            "form",
            {class: 'game-settings modal',
            id: 'modal-1'
          },wp.element.createElement(
            "form",
            {class: 'modal-content',},wp.element.createElement('div', {class: 'gSetting'}, 
          wp.element.createElement("label", {
            for: "cWidth"
          }, "Longueur de la table de jeu"), wp.element.createElement("input", {
            type: "number",
            id: "cWidth",
            name: "cWidth",
            value : props.attributes.cWidth ? props.attributes.cWidth : 1400,
            onChange: updateCanvasWidth
          })),wp.element.createElement('div', {class: 'gSetting'}, 
          wp.element.createElement("label", {
            for: "cHeight"
          }, "Hauteur de la table de jeu"), wp.element.createElement("input", {
            type: "number",
            id: "cHeight",
            name: "cHeight",
            value : props.attributes.cHeight ? props.attributes.cHeight : 1000,
            onChange: updateCanvasHeight
          })),
          wp.element.createElement('div', {class: 'gSetting'}, 
          wp.element.createElement("label", {
            for: "textStart"
          }, "Texte start"), wp.element.createElement("input", {
            type: "text",
            id: "textStart",
            name: "textStart",
            value : props.attributes.textStart ? props.attributes.textStart : "Press Any key to begin",
            onChange: updatetextStart
          })),
          wp.element.createElement('div', {class: 'gSetting'}, 
          wp.element.createElement("label", {
            for: "textGameover"
          }, "Texte Game Over"), wp.element.createElement("input", {
            type: "text",
            id: "textGameover",
            name: "textGameover",
            value : props.attributes.textGameover ? props.attributes.textGameover : "GAME OVER !",
            onChange: updatetextGameover
          })),
          wp.element.createElement('div', {class: 'gSetting'}, 
          wp.element.createElement(wp.components.ColorPicker, {
            color: props.attributes.color,
            onChangeComplete: updatebackColor
          }))))
        );
      },
    
      save: function (props) {
        return wp.element.createElement("div", {
          class: "game-container"
        }, wp.element.createElement("canvas", {
          id: 'canvasGames',
          "data-cwidth": props.attributes.cWidth,
          "data-cheight": props.attributes.cHeight,
          "data-textStart": props.attributes.textStart,
          "data-textGameover": props.attributes.textGameover,
          "data-colorBack": props.attributes.color,
        }, "Votre navigateur ne permet pas l'utilisation de la balise canvas, vous ne pouvez pas lire le jeu"))
      },
    });
  })()
  
  