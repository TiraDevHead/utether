import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';
import { ColorType } from '../Libs/LightweightChart/types';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"صرافی تترلند"} style={{ minHeight: 680, opacity: "75%", backgroundRepeat: "no-repeat", margin: 10, width: "calc(100% - 20px)", backgroundColor: "#386E3D" }}>


        {/* <img src="/red2.png" style={{opacity:"30%"}} /> */}
        <br />
        <pre>


          <div style={{ height: "420px", float: "right", width: "340px", marginRight: "45px", marginBottom: "0px", borderRadius: "20px", marginTop: "50px", background: "linear-gradient(to bottom left, #1891E2 20%, gainsboro 99%)" }} >

            <pre style={{ width: "100%", fontFamily: "sans-serif", height: 50, borderRadius: 10, textAlign: "center", color: "black", opacity: "100%", float: "left" }}>
              {/* <img src="/n.jpg" style={{ float: "left", width: "200px" }} /> */}
              <div style={{ width: "340", height: "50px", textAlign: "center", color: "black", borderRadius: "20px", backgroundColor: "white" }}>
                <br />
                <div style={{ opacity: "1000%", fontSize: "26px", marginTop: "-13px" }}>
                <img src="/tlogo.jpg" style={{width:"30px",float:"right",marginTop:"7px",marginRight:"110px",marginLeft:"-130px"} }/>

                  ت‍ـــتـــر
                </div>

              </div>
              <br-x />
              قیمت لحظه ای  : {(props.p.price as number).toLocaleString("fa-IR")} دلار
              <br-xxxx />
              <br />
              <hr />
              <br />
              تغییر ۲۴ ساعته قیمت   :  ٪  {(parseFloat(props.p.diff24d) as number).toLocaleString("fa-IR")}
              <br-xxxx /><br /><hr /><br />
              تغییر قیمت ماه اخیر   :  ٪  {(parseFloat(props.p.diff30d) as number).toLocaleString("fa-IR")}
              <br-xxxx />
              <br />
              <hr />
              <br />
              تغییر قیمت هفته اخیر:  ٪  {(parseFloat(props.p.diff7d) as number).toLocaleString("fa-IR")}
              <br-xxxx />
              <br />
              <hr />
              <br />
              میانگین قیمت ۲۴ ساعت اخیر:    {(props.p.last24h as number).toLocaleString("fa-IR")} دلار
              <br-xxxx />
              <br />
              <hr />
              <br />
              میانگین قیمت هفته اخیر:    {(props.p.last7d as number).toLocaleString("fa-IR")} دلار
              <br-xxxx />
              <br />
              <hr />
              <br />
              میانگین قیمت ماه اخیر:    {(props.p.last30d as number).toLocaleString("fa-IR")} دلار


            </pre>
            <br />

          </div>

          <div style={{ height: "420px", float: "left", width: "340px", marginLeft: "45px", marginBottom: "0px", borderRadius: "20px", marginTop: "50px", background: "linear-gradient(to bottom right, #0F7A58 20%, lightcyan 99%)" }} >

            <pre style={{ width: "100%", fontFamily: "sans-serif", height: 50, borderRadius: 10, textAlign: "center", color: "black", opacity: "100%", float: "left" }}>
              {/* <img src="/n.jpg" style={{ float: "left", width: "200px" }} /> */}
              <div style={{ width: "340", height: "50px", textAlign: "center", color: "black", borderRadius: "20px", backgroundColor: "white" }}>
                <br />
                <div style={{ opacity: "1000%", fontSize: "26px", marginTop: "-12px" }}>
                  <img src="/tlogo.jpg" style={{width:"30px",float:"right",marginTop:"6px",marginRight:"110px",marginLeft:"-120px"} }/>
                  Tether
                </div>
              </div>
              <br-x />
              $ Last Price : {(props.p.price as number)}
              <br-xxxx />
              <br />
              <hr />
              <br />
              % Last 24 Hours Change :   {(props.p.diff24d as number)}
              <br-xxxx /><br /><hr /><br />
              % Last Month Price Change   :    {(props.p.diff30d as number).toLocaleString("fa-IR")}
              <br-xxxx />
              <br />
              <hr />
              <br />
              % Last Week Price Change:    {(props.p.diff7d as number).toLocaleString("fa-IR")}
              <br-xxxx />
              <br />
              <hr />
              <br />
              $ Last 24 Hour Price:    {(props.p.last24h as number)}
              <br-xxxx />
              <br />
              <hr />
              <br />
              $ Last Week Price:    {(props.p.last7d as number)}
              <br-xxxx />
              <br />
              <hr />
              <br />
              $ Last Month Price:    {(props.p.last30d as number)}



            </pre>
            <br />

          </div>
        </pre>

        <video autoPlay loop style={{ width: "40%", marginRight: "250px", marginTop: "20px", borderRadius: "20px" }}><source src='/boo.mp4' type='video/mp4'></source></video>
        <pre style={{ marginTop: "-29px", textAlign: "center", fontFamily: "sans-serif", color: "black", opacity: "2", fontSize: "16px" }}>
          <i>طراحی شده توسط علی زراوشان </i><sup>TiraDev</sup>
        </pre>


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT
  console.log("PRICEEEEEEEEE:", p)

  return {
    props: {
      data: global.QSON.stringify({
        p: p,
        session,
        // nlangs,
      })
    },
  }
}