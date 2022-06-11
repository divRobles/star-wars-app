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
      charactersProperties: [],
      planets: [],
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
      getCharacters: () => {
        fetch("https://www.swapi.tech/api/people", {
          method: "GET",
          ContentType: "application/json",
        })
          .then((resp) => resp.json())
          // .then((resp) => console.log(resp))
          .then((data) =>
            setStore({
                // ...store,
              characters: data.results,
            })
          )
          .catch((e)=>{
            console.dir(e);
            e.message === 'Unexpected token M in JSON at position 0' && alert('Api saturá')
          })
      },
      getCharactersProperties: () => {
        let result = [];
        // for (let i = 1; i < 11; i++) {
        //   fetch(`https://www.swapi.tech/api/people/${i}`, {
        //     method: "GET",
        //     ContentType: "application/json",
        //   })
        //     .then((resp) => resp.json())
        //     // .then((resp) => console.log(resp))
        //     .then((data) => result.push(data.result));
        // }
        // setStore({
        //   charactersProperties: result
        // });
        for (let i = 1; i < 11; i++) {
          async function f(){
            const resp = await fetch(`https://www.swapi.tech/api/people/${i}`);
            const res = await resp.json();
            result.push(res.result);
            result.length===10 &&
            setStore({
                charactersProperties: result
              });
          }
          f()
        }
      },
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets", {
          method: "GET",
          ContentType: "application/json",
        })
          .then((resp) => resp.json())
          .then((resp) =>
            setStore({
              planets: resp.results,
            })
          );
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
