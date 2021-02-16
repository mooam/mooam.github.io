const Temp = React.createClass({ displayName: "Temp",
  getInitialState: function () {
    return {
      currentTemp: 40 };

  },

  setTemperature: function (e) {
    this.setState({ currentTemp: e.target.value });
  },

  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "tempBox" }, /*#__PURE__*/
      React.createElement("div", { className: "range-slider" }, /*#__PURE__*/
      React.createElement("input", { className: "range-slider__range", type: "range", min: "-200", max: "300", onChange: this.setTemperature, value: this.state.currentTemp, step: "1" })), /*#__PURE__*/

      React.createElement("div", { className: "temp-text text-center" },
      this.state.currentTemp, "\xB0C"), /*#__PURE__*/

      React.createElement(StateList, { liquids: [ethanol, water, benzene, acetone, lauricAcid, diethylEther, camphor, naphthalene, phenol], temperature: this.state.currentTemp })));


  } });



const Liquid = React.createClass({ displayName: "Liquid",
  render: function () {
    // empty variable that will hold either "Liquid", "Solid", or "Gas"
    let stateOfMatter;
    // If temp is on/below freezing, it's a solid 
    if (this.props.temperature <= this.props.config.freezing) {
      stateOfMatter = 'ของแข็ง';
      // if temp is on/above boiling, it's a gas
    } else if (this.props.temperature >= this.props.config.boiling) {
      stateOfMatter = 'แก๊ส';
      // otherwise it's just a liquid
    } else {
      stateOfMatter = 'ของเหลว';
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", null, "ที่อุณภูมิ ", this.props.temperature, "\xB0C, ", /*#__PURE__*/React.createElement("span", { className: "label label-info" }, this.props.config.name), " อยู่ในสถานะ \"", stateOfMatter,"\"")));


  } });


const LiquidsList = React.createClass({ displayName: "LiquidsList",
  render: function () {
    let temp = { temp: this.props.temperature };
    // TO DO could I map over and return liquids, gases and solids in seperate divs?
    let liquids = this.props.liquids.map(function (liquidObject, index) {
      return /*#__PURE__*/React.createElement(Liquid, { config: liquidObject, key: index, temperature: temp.temp });
    });
    return /*#__PURE__*/(
      React.createElement("div", null,
      liquids));



  } });


const StateList = React.createClass({ displayName: "StateList",
  render: function () {
    let temp = { temp: this.props.temperature };

    let solids = this.props.liquids.map(function (liquidObject, index) {
      if (temp.temp <= liquidObject.freezing) {
        return /*#__PURE__*/React.createElement(Liquid, { config: liquidObject, key: index, temperature: temp.temp });
      }
    });

    let liquids = this.props.liquids.map(function (liquidObject, index) {
      if (temp.temp > liquidObject.freezing && temp.temp < liquidObject.boiling) {
        return /*#__PURE__*/React.createElement(Liquid, { config: liquidObject, key: index, temperature: temp.temp });
      }
    });

    let gases = this.props.liquids.map(function (liquidObject, index) {
      if (temp.temp >= liquidObject.boiling) {
        return /*#__PURE__*/React.createElement(Liquid, { config: liquidObject, key: index, temperature: temp.temp });
      }
    });

    return /*#__PURE__*/(
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-sm-4" }, /*#__PURE__*/
      React.createElement("h2", null, "Solid"), /*#__PURE__*/
      React.createElement("div", { className: "beaker solid" },
      solids)), /*#__PURE__*/


      React.createElement("div", { className: "col-sm-4" }, /*#__PURE__*/
      React.createElement("h2", null, "Liquid"), /*#__PURE__*/
      React.createElement("div", { className: "beaker liquid" },
      liquids)), /*#__PURE__*/


      React.createElement("div", { className: "col-sm-4" }, /*#__PURE__*/
      React.createElement("h2", null, "Gas"), /*#__PURE__*/
      React.createElement("div", { className: "beaker gas" },
      gases))));





  } });



// Create an array of objects to hold name, freezing & boiling points
let water = {
  name: "น้ำ [H<sub>2</sub>O]",
  freezing: 0,
  boiling: 100 };

let ethanol = {
  name: "เอทานอล",
  freezing: -114.6,
  boiling: 78.4 };

let benzene = {
  name: "เบนซีน",
  freezing: 5.5,
  boiling: 80.1 };

let acetone = {
  name: "อะซิโตน",
  freezing: -94.8,
  boiling: 56.2 };

let lauricAcid = {
  name: "กรดลอริก",
  freezing: 44,
  boiling: 298.9 };

let diethylEther = {
  name: "ไดเอทิล อีเทอร์",
  freezing: -116.2,
  boiling: 34.5 };

let camphor = {
  name: "การบูร",
  freezing: 179,
  boiling: 204 };

let naphthalene = {
  name: "แนพธาลีน",
  freezing: 80.2,
  boiling: 217.9 };

let phenol = {
  name: "ฟีนอล",
  freezing: 43,
  boiling: 181.75 };

// Render our LiquidsList component!
ReactDOM.render( /*#__PURE__*/React.createElement(Temp, null), document.getElementById('content'));