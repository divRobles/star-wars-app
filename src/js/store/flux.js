import { useState } from "react/cjs/react.production.min";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      select: [],
      charactersProperties: [],
      planets: [],
      selectPlanet: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
                                	fetch().then().then(data => setStore({ "foo": data.bar }))
                                */

        const [actions, setActions] = useState({
          addTask: (title) =>
            setStore({
              ...store,
              todos: store.todos.concat(title),
            }),
        });
      },
      getCharacter: (character) =>
        setStore({
          select: character,
        }),
      getCharactersProperties: () => {
        fetch(`https://swapi.dev/api/people`, {
          method: "GET",
          ContentType: "application/json",
        })
          .then((resp) => resp.json())
          .then((resp) => {
              setStore({
                charactersProperties: resp.results,
              });
          });
      },
      getPlanets: () => {
        const store = getStore();

          fetch(`https://swapi.dev/api/planets`, {
            method: "GET",
            ContentType: "application/json",
          })
            .then((resp) => resp.json())
            .then((resp) => {
                setStore({
                  planets: resp.results,
                });
            });
    },
    getPlanet : (planet) =>{
      
        setStore({
            selectPlanet: planet
        })
    },
    favorites: (name)=>{
      const store = getStore();
      let repe = true;
      store.favorites.filter(function(ele){
        if(ele.id === name.id){
          alert(`${name.name} ya es fav`)
          return repe = false;
        }
      });
      repe &&
      setStore({
        favorites: [...store.favorites, name]
      })

    },

    transforFavorites : (info)=>{
      const store = getStore();
      
      setStore({
        favorites: store.favorites.filter(function(ele){
          if(ele && ele.id !== info){
            return ele;
          }
        })
      });

    },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
  
    },
  };
};

export default getState;
