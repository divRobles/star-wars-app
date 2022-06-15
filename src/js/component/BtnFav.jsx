import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import { Context } from '../store/appContext';
import uniqid from "uniqid";


export const BtnFav = ({ favoritos }) => {

    const {store, actions} = useContext(Context);
    const favorites = store.favorites;


    console.log('listaFavs',favorites)
    const click =(ident)=>{
        // actions.transforFavorites({name: 'eh', id: 2})
        console.log(ident)
        favorites.map((ele )=>{
            if (ele && ele.id === ident){
                actions.transforFavorites(ident)
            }
        })
    }




    return (
        <div className="col-10 col-enlace-demo">
            <div className="ml-auto">

                <div className="btn-group">
                    <button type="button" className="btn dropdown-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Action
                    </button>


                    <ul className="dropdown-menu">
                        <li id={uniqid("fav-")}>
                            <div className="row">
                                <div className="col-12">
                                    <a className="dropdown-item" href="#">Favoritos</a>
                                </div>
                            </div>
                        </li>

                        {
                            favoritos && favoritos.map((ele, i) => {
                                
                                const listaFavs = [];
                                const ident = ele && ele.id
                                if(ele){
                                const fav =
                                <li key={ident}>
                                    <div className="row">
                                        <div className="col-10">
                                            <a className="dropdown-item" href="#">{ele && ele.name}</a>
                                        </div>
                                        <div className="col-2">
                                            <div className="botonDelete" id={ident} onClick={()=>click(ele.id)}>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                listaFavs.push(fav)
                                // listaFavs.map((ele)=>{
                                //     return ele.key !== a
                                // })
                                // return i !== 0 && listaFavs
                            }
                            return listaFavs


                            })

                        }

                    </ul>
                </div>

            </div>

        </div>

    );
};
