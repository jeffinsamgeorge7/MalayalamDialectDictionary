import React,{useState} from 'react'
import style from  './Home.module.css';
import { HeaderSearch } from '../Header/HeaderSearch';
import { TextInput, ActionIcon, useMantineTheme, rem, Menu, } from '@mantine/core';
import { IconSearch, IconArrowRight,IconVolume2 } from '@tabler/icons-react';
import { Keralamap } from '../Maps/Keralamap';
import { Drilldownmap } from '../Maps/Drilldownmap';

// const data = [
//   'Kerala',
//   'District',
//   'Corporation',
//   'Muncipality',
//   'Block',
//   'Panchayath',
//   'Taluk',
//   'Village',
// ];

const data = [
  'Kerala',
  'District',
  'Taluk',
  'Block',
];

export const Home = () => {
  
  const [clickedDistrict, setClickedDistrict] = useState(null);


console.log('seleck',clickedDistrict)

  const theme = useMantineTheme();




  return (
    <>
       <HeaderSearch/>
            
            <div className={style.container}>
                
           
            <div className={style.content}>
                <h1>
                    MALAYALAM DIALECT MAP
                </h1>
                <div   className={style.Search}>
                <TextInput  className={style.Searchinput} style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
                   
                   size="md"
                   placeholder="Search questions"
                   rightSectionWidth={42}
                  leftSection={<IconSearch  style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                 

                  rightSection={
                    <ActionIcon size={32}  color={theme.primaryColor}   variant="filled ">
                    <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                         } 
                 />
                 
               
                </div>
             
                 {/* map */}
                 <div className={style.content1}>
                  <div>
                 
                  {/* <Keralamap setClickedDistrict={setClickedDistrict} /> */}
                  <Drilldownmap/>

                
                  </div>
                 <div className={style.dictionary}>
                 <h1>കറുമൂസ് <IconVolume2/></h1>
                 <h4>IPA Karumusa</h4>

                 <h4>Formal: പപ്പായ </h4>
                
                 
               
                 <p>കേരളത്തിൽ സാധാരണ കാണപ്പെടുന്ന ഒരു സസ്യമാണ് പപ്പായ (Carica papaya). മെക്സിക്കോ തുടങ്ങിയ മദ്ധ്യ അമേരിക്കൻ രാജ്യങ്ങളിലാണ്‌ പപ്പായ പ്രധാനമായും കണ്ടുവരുന്നത്‌</p>
<hr/>
                 <h3>വാചകം</h3>
                <ol>
                  <li>കറുമൂസ്  ഒരു പഴമാണ്</li>
                  
                </ol>

                
                 </div>

                 
             
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>


                
                    
                </div>

                <div className={style.tabledialects}>
                      <table>
                        <tr><td> ഭാഷാഭേദങ്ങൾ </td></tr>
                        <hr/>
                        <p>കപ്പളം, കപ്പളങ്ങ, കപ്പക്കാ, കൊപ്പക്കാ, കർമൂസ്, കർമത്തി, കപ്പ, കപ്പുക്ക, കപ്പത്തുങ്കായ, കൊപ്പക്കായ, കപ്ലങ്ങ, കപ്ലിങ്ങ, കപ്പങ്ങ, പപ്പ, പപ്പയ്ക്ക, പപ്പക്കായ, പപ്പങ്ങ, പപ്പാളി, പപ്പാളിക്കായ്, പപ്പാവയ്ക്കാ, പപ്പാളങ്ങ, പപ്പരക്ക, പപ്പരങ്ങ, ഓമയ്ക്ക, ഓമക്കായ, ഓമരിക്ക, കർമൂസ, കറൂത്ത, കർമത്ത, കർമത്തി, കറുവത്തി, കറുമത്തുങ്കായ്, കർമിച്ചി, ദർമത്തുങ്കായ, ദർമസുങ്കായ, മരമത്തങ്ങ, ആണുമ്പെണ്ണുങ്കായ് </p>
               
                      </table>
                  </div>
                <div className={style.table}>

                
                <div className={style.table1}>
                      <table>
                        <tr><td>നാമം</td></tr>
                        <hr/>
                        <tr>പപ്പായ</tr>
                        <tr>കപ്പളങ്ങ</tr>
                      </table>
                  </div>
                  <div className={style.table2}>
                  <table>
                        <tr><td>ക്രിയ</td></tr>
                         <hr/>
                        <tr>പപ്പായ കഴിക്കുന്നു</tr>
                      </table>
                  </div>

                  <div className={style.table3}>
                  <table>
                        <tr><td>വിശേഷണം</td></tr>
                        <hr/>
                        <tr>പപ്പായ കഴിക്കുന്നു</tr>
                      </table>
                  </div>

                
               </div>

               <div className={style.table}>
               

               </div>

                {/* <div className={style.dialects}>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  <h1>dvdfv</h1>
                  
                </div> */}
            </div>
            </div>
   
    
    </>
  )
}
