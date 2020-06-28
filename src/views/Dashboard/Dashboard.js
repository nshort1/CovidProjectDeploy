import React, { Component, lazy, Suspense, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import ReactTooltip from "react-tooltip";
import navigation from '../../_nav';
import Florida from "../../florida";
import Counties from "../../counties";
import Daily from "../../daily";
import Usa_daily from "../../usa_daily";


const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
const curday =(day)=> {
const dash = "-"
let date = new Date();
date.setDate(date.getDate() - day);
var dd = date.getDate();
var mm = date.getMonth()+1; //As January is 0.
var yyyy = date.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+dash+dd+dash+yyyy);
};

const curdayr =(day)=> {
const dash = "-"
let date = new Date();
date.setDate(date.getDate() - day);
var dd = date.getDate();
var mm = date.getMonth()+1; //As January is 0.
var yyyy = date.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (yyyy+dash+mm+dash+dd);
};



const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const daily_url ="https://covid19.mathdro.id/api/daily/";
let change = false;


// Card Chart 1
const cardChartData1 = {
    labels: [curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'Confirmed Cases',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [0,0,0,0,0,0,0],
    },
  ],
};


const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
      }],
  },
};


// Card Chart 2
const cardChartData2 = {
  labels:[curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'Confirmed Cases',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
      }],
  },
};

// Card Chart 3
const cardChartData3 = {
  labels:  [curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'Confirmed Cases',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [150000, 150000, 150000, 150000, 150000, 150000, 150000],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
      }],
  },
};

// Card Chart 4
const cardChartData4 = {
  labels:  [curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'Confirmed Cases',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
      }],
  },
};



// Main Chart




const mainChart = {
  labels: [curday(28), curday(27), curday(26), curday(25), curday(24), curday(23), curday(22), curday(21), curday(20), curday(19), curday(18), curday(17), curday(16)
  , curday(15), curday(14), curday(13), curday(12), curday(11), curday(10), curday(9), curday(8), curday(7), curday(6), curday(5), curday(4), curday(3), curday(2), curday(1)],
  datasets: [
    {
      label: 'Confirmed Cases',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    },
    {
      label: 'Projections Mean',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
      }],
  },
  elements: {
    point: {
      radius: 1,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};



const country_url = "https://covid19.mathdro.id/api/countries/USA";
const confirmed_url = "https://covid19.mathdro.id/api/countries/USA/confirmed";
const get_country = async () => {
const response = await fetch(country_url);
const country = await response.json();
let val = await country.confirmed.value;
return val;
}



const orange = async (county)=>{
  let val;
  let data = await Counties();
  for(let i = 0; i<data.length;i++){
    if(data[i].admin2==county){
      val=data[i].confirmed;
    }
  }
  return val;
}

const counties_daily = async (data,county)=>{
  let val=[];
  for(let i = 0; i<data.length;i++){
    for(let k = 0; k<data[i].length;k++){
    if(data[i][k].admin2==county){
      val[6-i]=data[i][k].confirmed;
    }
  }
  }
  return val;
}

const florida_total = async ()=>{
  let val=0;
  let data = await Counties();
  for(let i = 0; i<data.length;i++){
    val+=data[i].confirmed;
  }
  return val;
}



const state_daily = async (data,n)=>{
  let val =[];
  for(let j =0; j<n+1;j++)
  {
    val.push(0);
  }
  for(let i = 0; i<data.length;i++){
    for(let k=0;k<data[i].length;k++){
val[n-i]=parseInt(val[n-i])+parseInt(data[i][k].confirmed);
  }
}
return val;
}
let est = {}
const csv_data = (data)=>{
  		est = data;
}


var us_csv = require('../../US.csv');
var fl_csv = require('../../US_FL.csv');


var Papa = require("papaparse/papaparse.min.js");

var pressed =false;

var us_url= "https://api.covid19api.com/total/country/united-states?from=" + curdayr(28) +"T00:00:00Z&to=" +curdayr(1) +"T00:00:00Z";




class Dashboard extends Component {
  state = {
    country: {},
    orange: {},
    osceola: {},
    total: {},
    counties_daily:[0,0,0,0,0,0,0] ,
    fl_daily: [0,0,0,0,0,0,0],
    fl_daily_main: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    us_daily_main: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    us_daily: [0,0,0,0,0,0,0],
    fl_options: {},
    county: "",
    change: false,
    fl_week: [],
    us_estimates: {},
    florida_estimates: {},
    main_title: "",
  }



  constructor(props) {
    super(props);
    this.updateData_us = this.updateData_us.bind(this);
    this.updateData_fl = this.updateData_fl.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };



    this.state.main_title="Florida Confirmed Covid Cases vs Estimates";
    this.state.fl_options = cardChartOpts1;
    this.state.county = "Orange";
  }



    async componentDidMount(){

      Papa.parse(us_csv, {
        header: true,
        dynamicTyping: false,
        delimiter: ",",
        download: true,
      	complete:  this.updateData_us,
      	}
      );

      Papa.parse(fl_csv, {
        header: true,
        dynamicTyping: false,
        delimiter: ",",
        download: true,
        complete:  this.updateData_fl,
        }
      );

      console.log(this.state.florida_estimates)
    const country_confirmed = await get_country();
    const orange_confirmed = await orange(this.state.county);
    const state_confirmed = await florida_total();
    const us_daily_main_vals = await Usa_daily(us_url);
    console.log(us_url);
    const us_daily_vals = us_daily_main_vals.slice(21,28);
    const daily_vals_main = await Daily(29);
    const daily_vals = daily_vals_main.slice(0,7);
    const oc_daily_vals = await counties_daily(daily_vals,this.state.county);
    const state_daily_vals = await state_daily(daily_vals,6);
    const state_daily_main = await state_daily(daily_vals_main,27);

    mainChart.datasets[0].data = [...state_daily_main];
    cardChartData1.datasets[0].data = [...state_daily_vals];
    cardChartData2.datasets[0].data = [...oc_daily_vals];
    cardChartData4.datasets[0].data = [...us_daily_vals];



    this.setState({country: this.formatNumber(country_confirmed), orange: this.formatNumber(orange_confirmed), total: this.formatNumber(state_confirmed)
    ,fl_daily: state_daily_vals, counties_daily: oc_daily_vals, us_daily: us_daily_vals, fl_daily_main: state_daily_main,
    county: navigation.items[0].name, fl_week: daily_vals, us_daily_main: us_daily_main_vals});
    let store = this.state.florida_estimates;
    mainChart.datasets[1].data = store;
    this.setState({florida_estimates: store});



  }

  async componentDidUpdate(){
    let vals;
    let vals2;
    if(change==true){
      change=false;
      const orange_confirmed = await orange(this.state.county);
      const daily_vals = await counties_daily(this.state.fl_week,this.state.county);
      cardChartData2.datasets[0].data =[...daily_vals];
      this.setState({orange: this.formatNumber(orange_confirmed), counties_daily: daily_vals});
    }

    if(pressed==true && this.state.radioSelected ==1)
    {

      pressed =false;
      let store = [...this.state.us_estimates];
      let store2 = [...this.state.us_daily_main];
      mainChart.datasets[1].data = [...store];
      mainChart.datasets[0].data = [...store2];
      this.setState({us_esitmates: store, us_daily_main: store2, main_title: "USA Confirmed Covid Cases vs Estimates"});

    }

    else if (pressed==true && this.state.radioSelected ==2) {
      let store = [...this.state.florida_estimates];
      let store2 = [...this.state.fl_daily_main];
      pressed =false;
      mainChart.datasets[1].data = [...this.state.florida_estimates];
      mainChart.datasets[0].data = [...this.state.fl_daily_main];

      this.setState({florida_estimates: store, fl_daily_main: store2, main_title: "Florida Confirmed Covid Cases vs Estimates"});
    }

  }



async updateData_us(result) {
    const data = await result.data;
    let vals= {};
    let final = [];
    for(let i =0; i<data.length;i++)
      {
        if(data[i].date == curdayr(1))
        {
          vals = data.slice(i-28,i);
        }
      }

      for(let k = 0; k<vals.length;k++)
      {
        final[k] = vals[k].predicted_current_infected_mean;
      }
    this.setState({us_estimates: final});

  }



  async updateData_fl(result) {
      const data = await result.data;
      let final = [];
      let vals= {};
      for(let i =0; i<data.length;i++)
        {
          if(data[i].date == curdayr(1))
          {
            vals = data.slice(i-28,i);
          }
        }
        for(let k = 0; k<vals.length;k++)
        {
          final[k] = vals[k].predicted_current_infected_mean;
        }
      this.setState({florida_estimates: final});

    }

  formatNumber(num){
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    if(radioSelected !=this.state.radioSelected)
    {
    this.setState({
      radioSelected: radioSelected,
    });

    pressed=true;


  }
}

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">{this.state.main_title}</CardTitle>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>USA</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Florida</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Projections Mean</div>
                    <Progress className="progress-xs mt-2" color="success" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Confirmed</div>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>

                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>


        <div onClick={ ()=>{change = true; this.setState({county: navigation.items[0].name}); }}>
        <Florida />
        </div>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">{this.state.orange}</div>
                <div>Current Cases in {this.state.county} County</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div className="text-value">{this.state.total}</div>
                <div>Current Cases in Florida</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={this.state.fl_options} height={70} />
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">{this.state.country}</div>
                <div>Total Cases in the U.S</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>




      </div>

    );
  }
}

export default Dashboard;
