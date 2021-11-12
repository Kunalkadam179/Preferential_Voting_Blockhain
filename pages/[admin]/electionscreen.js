import React from 'react'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import 'bootstrap/dist/css/bootstrap.css'

export default function electionscreen() {
    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
                <Head/>
                <Nav/>   
            </div>
            <div class="row" style={{marginTop: "10px", marginBottom: "10px"}}>
                <div class="col">
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col text-white" style={{fontSize: "30px", verticalAlign: "middle"}}>
                            Elections Name
                        </div>
                        <div class="col" style={{verticalAlign: "middle"}}>
                            <button type="submit" className="btn btn-primary btn-block">
                                <a className="nav-link" href="/admin/addelectionscreen" style={{color: "White"}}>Add Candidate</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/admin/upcommingelection" style={{color: "Black"}}>
                                    <div class="row">
                                        <div class="col">
                                            Election Name
                                        </div>
                                        <div class="col">
                                            Time
                                        </div>
                                        <div class="col">
                                            Upcomming
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <a className="nav-link" href="/admin/calculateresult" style={{color: "Black"}}>
                                    <div class="row">
                                        <div class="col">
                                            Election Name
                                        </div>
                                        <div class="col">
                                            Time
                                        </div>
                                        <div class="col">
                                            Completed
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="card container" style={{marginTop: "10px", marginBottom: "10px"}}>
                            <div className="card-body">
                                <div class="row">
                                        <div class="col">
                                            Election Name
                                        </div>
                                        <div class="col">
                                            Time
                                        </div>
                                        <div class="col">
                                            Live
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    )
}