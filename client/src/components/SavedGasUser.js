import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './App.css';
import { Footer } from './Footerr';
import Header from './Header';

const SavedGasUser = ({ userData }) => {
  const { ResourceSaved } = userData;

  const {
    CarbonDiOxide,
    CarbonMonOxide,
    NitrogenOxide,
    HydroCarbons,
    ParticularMatter,
    SulphurDiOxide,
    BenzeneEmission
  } = ResourceSaved;

  const totalSaved = CarbonDiOxide + CarbonMonOxide + NitrogenOxide + HydroCarbons + ParticularMatter + SulphurDiOxide + BenzeneEmission;

  const data = [
    { title: 'HC', value: CarbonDiOxide, color: 'red' },
    { title: 'CO', value: CarbonMonOxide, color: '#36a2eb' },
    { title: 'NO', value: NitrogenOxide, color: 'grey' },
    { title: 'CO2', value: HydroCarbons, color: '#ff6384' },
    { title: 'PM', value: ParticularMatter, color: '#36a2eb' },
    { title: 'SO2', value: SulphurDiOxide, color: 'orange' },
    { title: 'BE', value: BenzeneEmission, color: '#ffce56' },
  ];

  return (
    <div>
    <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="carbon-footprint">
              <h3>Carbon Footprint</h3>
              <span>{CarbonDiOxide+CarbonDiOxide}Units</span>
            </div>
            <h2>Pie Chart</h2>
            <div className="pie-chart-container">
              <div className="pie-chart">
                <PieChart
                  data={data}
                  label={({ dataEntry }) => `${dataEntry.title}: ${Math.round(dataEntry.percentage)} %`}
                  labelStyle={{ fontSize: '5px', fontFamily: 'sans-serif' }}
                  radius={40}
                  animate
                  animationDuration={500}
                  labelPosition={112}
                />
              </div>
            </div>
            <h2>Saved Gases</h2>
            <div className="saved-gases">
              <div className="box animated-box" style={{"background":"#ff6384"}}>
                <span>C02</span>
                <span>{Math.round(CarbonDiOxide)} Kgs</span>
              </div>
              <div className="box animated-box" style={{"background":"#36a2eb"}}>
                <span>CO</span>
                <span>{Math.round(CarbonMonOxide)} gms</span>
              </div>
              <div className="box animated-box" style={{"background":"grey"}}>
                <span>NO</span>
                <span>{Math.round(NitrogenOxide )}gms</span>
              </div>
              <div className="box animated-box" style={{"background":"red"}}>
                <span>HC</span>
                <span>{Math.round(HydroCarbons)} gms</span>
              </div>
              <div className="box animated-box" style={{"background":"#36a2eb"}}>
                <span>PM</span>
                <span>{Math.round(ParticularMatter) }gms</span>
              </div>
              <div className="box animated-box" style={{"background" :"orange"}}>
                <span>SO2</span>
                <span>{Math.round(SulphurDiOxide)} gms</span>
              </div>
              <div className="box animated-box" style={{"background":"#ffce56"}}>
                <span>BE</span>
                <span>{Math.round(BenzeneEmission)} gms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedGasUser;
