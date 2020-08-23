import React, { Component } from 'react'
import Rockets from './rockets';
import axios from 'axios';

class sidebar extends Component {
    state = {
        years:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
        objs:null,
        loading:false
    }

    async componentDidMount(){
        this.setState({loading:true});
        const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=50');
        this.setState({objs:res.data, loading:false});
    }

    url_values = (e)=>{
        const query = e.target.getAttribute('what');
        let kk;
        let save = '';

        e.target.classList.toggle('change');
        if(query==='year'){
            kk = document.querySelectorAll('.year .keto .btn.btn-green.change');
            kk.forEach(val=>{
                if(e.target.innerText !== val.innerText)
                    val.classList.remove('change')
            })
        }

        if(query==='launch_success'){
            kk = document.querySelectorAll('.launch .keto .btn.btn-green.change');
            kk.forEach(val=>{
                if(e.target.innerText !== val.innerText)
                    val.classList.remove('change')
            })
        }

        if(query==='land_success'){
            kk = document.querySelectorAll('.landing .keto .btn.btn-green.change');
            kk.forEach(val=>{
                if(e.target.innerText !== val.innerText)
                    val.classList.remove('change')
            })
        }
        // finding query
        kk = document.querySelectorAll('.btn.btn-green.change');
        kk.forEach(val=>{
            if(val.innerText !== 'False'){
                let h = val.getAttribute('what');
                if(h==='year'){
                    save = `&launch_year=${val.innerText}`;
                }else{
                    save = save + `&${h}=true`;
                }
            }
        })
        
        // console.log(save);
        // this.setState((currentState)=>(
        //     {q:save}
        // ))
        
        // get objects
        this.props.getPath(save);
        this.get_objects(save);
    }

    get_objects = async (save)=>{
        this.setState({loading:true});
        const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=50'+save);
        this.setState({objs:res.data,loading:false});
    }

    render() {
        const {years,objs,loading}  = this.state;
        return (
            <div className="outer">
                <div className="container">
                    <h3 style={{margin: "10px 0px -10px 20px "}}>Filters</h3>
                    <div className="year">
                        <p className="text">Launch Year</p>
                        <hr/>
                        <ul className="keto">
                            {years.map(year=>(
                                <li className="btn btn-green" what="year" key={year} onClick={this.url_values}>{year}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="launch">
                        <p className="text">Successful Launch</p>
                        <hr/>
                        <ul className="keto">
                            <li className="btn btn-green" what="launch_success" onClick={this.url_values}>True</li>
                            <li className="btn btn-green" what="launch_success" onClick={this.url_values}>False</li>
                        </ul>
                    </div>
                    <div className="landing">
                        <p className="text">Successful Landing</p>
                        <hr/>
                        <ul className="keto">
                            <li className="btn btn-green" what="land_success" onClick={this.url_values}>True</li>
                            <li className="btn btn-green" what="land_success" onClick={this.url_values}>False</li>
                        </ul>
                    </div>
            </div>
            <Rockets objs={objs} loading={loading}/>
        </div>
        )
    }
}

export default sidebar;