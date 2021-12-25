import KrAuth from '@/components/auth';
import globals from './layout'
var moment = require('moment');
var auth = new KrAuth();
import {barLocations,countriesAndCities,countries,languages} from './variables.js';

const data = Object.assign({}, {component_done_loading:true,krAuth: auth, kr_var:{barLocations:barLocations,countriesAndCities:countriesAndCities,countries:countries,languages:languages}}, globals());
export const globalMixins = {
  data(){
    return data
  },
  methods:{
    moment(options){
      return moment(options);
    },
    diffFromNow(date,locale="YYYY-MM-DD hh:mm:ss"){
      var postfix='s';
      var now = moment();
      var previous = null;
      if(moment.utc(date,locale).isValid()){
        previous = moment.utc(date,locale);
      }else{
        return '... time ago';
      }
      var minutes = now.diff(previous,'minutes');
      var hours = now.diff(previous,'hours');
      var days = now.diff(previous,'days');
      var months = now.diff(previous,'months');
      var years = now.diff(previous,'years');
      //console.log(unix+' previous' +previous.toString());
      //console.log('now' +now.toString());
      if(years>0){
          if(years==1){
              postfix='';
          }
          return years+' year'+postfix+' ago';
      }else if(months>0){
          if(months==1){
              postfix='';
          }
          return months+' month'+postfix+' ago';
      }else if(days>0){
          if(days==1){
              postfix='';
          }
          return days+' day'+postfix+' ago';
      }else if(hours>0){
          if(hours==1){
              postfix='';
          }
          return hours+' hour'+postfix+' ago';
      }else{
          if(minutes<1){
              postfix='';
          }
          return minutes+' minute'+postfix+' ago';
      }
    },
    convertToReadableDate(iso_date,to_format='h:mm A',options={}){
      //iso_date = '1992-01-01 11:11:11'
        var ret = {};
        ret.date = '';
        ret.timezone = '';
        ret.dateObj = null;
        var from_timezone = _.get(options,'from_timezone','local');
        var to_timezone = _.get(options,'to_timezone','local');
        var locale = _.get(options,'locale','YYYY-MM-DD hh:mm:ss');
      if(iso_date){
        var from = null;
        var to = null;
        if(from_timezone=='utc'){
          if(moment.utc(iso_date,locale).isValid()){
            from = moment.utc(iso_date,locale);
            if(to_timezone=='local'){
              to = from.local();
            }
          }
        }
        if(from_timezone=='local'){
          if(moment(iso_date,locale).isValid()){
            from = moment(iso_date,locale);
            if(to_timezone=='utc'){
              to = from.utc();
            }
            else if(to_timezone=='local'){
              to = from.local();
            }
          }
        }
        ret.date = to.format(to_format);
        ret.current_timezone = 'UTC '+ (to.utcOffset() >=0?'+':'-')+ (to.utcOffset()/60);
        ret.dateObj = to;
        return ret;
      }else{
        return ret;
      }
    },
    setMomentOffset(serverTime) {
      var offset = new Date(serverTime).getTime() - Date.now()/1000;
      moment.now = function() {
        return offset + Date.now();
      }
    },
    round(number, precision = 1){
      if(number==null){
        return 0;
      }
      return _.round(number,precision).toFixed(precision);
    },
    stripHtml(html)
    {
       var tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    },
    limitCharacters(html,limit=250){
      let a = this.stripHtml(html);
      if(a.length>250){
        let res = a.slice(0, limit);
        res+='...';
        return res;
      }
      return a;
    },
    absoluteUrl(url=''){
      let n = url.indexOf("//");
      if(n==-1){
        url = '//'+url;
      }
      return url;
    },
  }
}
