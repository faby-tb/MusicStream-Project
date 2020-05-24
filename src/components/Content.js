import React from 'react';
import Slider from './Slider';
import img from '../img/placeholder_600x400.svg';

const Content = () => {
        return(
            <div className="col-11 mt-3 mb-5 pb-4">
                <h1>Hi</h1>


                <div className="jumbotron jumbotron-fluid bg-danger">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>  
                </div>

                <div className="row container-fluid justify-content-center">
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card mb-3 bg-dark col-3 mx-4">
                        <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body position-relative">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>

                <Slider></Slider>
                    <p>Doggo ipsum smol heckin good boys the neighborhood pupper tungg, mlem blop. Big ol fat boi stop it fren boofers you are doing me a frighten adorable doggo, much ruin diet very good spot heckin good boys. tungg heckin shooberino. Borkf snoot I am bekom fat pupperino, floofs h*ck blep such treat, borkf borking doggo. Mlem pats borkdrive lotsa pats, bork heckin. Smol borking doggo with a long snoot for pats doggorino blop tungg, mlem you are doing me the shock borkdrive bork, very taste wow shibe. Shoober very hand that feed shibe such treat extremely cuuuuuute long doggo, smol borking doggo with a long snoot for pats tungg mlem heckin, h*ck heckin angery woofer shibe. Dat tungg tho porgo blop the neighborhood pupper big ol pupper, long woofer thicc. Noodle horse yapper thicc floofs big ol pupper tungg extremely cuuuuuute pats, big ol such treat very hand that feed shibe heckin good boys and girls floofs heckin angery woofer. Heckin floofs very taste wow, smol. Borking doggo pupper stop it fren, borkdrive.

I am bekom fat yapper puggo wow such tempt you are doin me a concern, yapper woofer heckin. Aqua doggo puggorino wow very biscit heckin you are doing me a frighten most angery pupper I have ever seen, snoot boofers long water shoob heckin angery woofer. Long doggo shoob stop it fren bork pats long bois thicc, most angery pupper I have ever seen smol borking doggo with a long snoot for pats much ruin diet corgo you are doing me a frighten. Maximum borkdrive big ol pupper boofers many pats, thicc waggy wags.</p>
                </div>
            </div>
        );
};

export default Content;