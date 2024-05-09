import React,{useState} from 'react'
import style from  './Home.module.css';
import { HeaderSearch } from '../Header/HeaderSearch';
import { TextInput, ActionIcon, useMantineTheme, rem, Menu, } from '@mantine/core';
import { IconSearch, IconArrowRight,IconVolume2 } from '@tabler/icons-react';
import { Keralamap } from '../Maps/Keralamap';

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
                <TextInput style={{width:'420px',marginLeft:'20px' ,marginBottom:'10px',marginRight: '10px',  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
                   
                   size="md"
                   placeholder="Search questions"
                   rightSectionWidth={42}
                  leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                 

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
                 
                <Keralamap />
                
                  </div>
                 <div className={style.dictionary}>
                 <h1>മീൻ <IconVolume2/></h1>
                 <h4>Formal: മീൻ </h4>
                 
                 <h4>IPA miːn̪u </h4>
                 <p>ശുദ്ധജലത്തിലും സമുദ്രജലത്തിലും ജീവിക്കുന്ന നട്ടെല്ലുള്ള ശീതരക്തജീവികളാണ്‌ മത്സ്യങ്ങൾ അഥവാ മീനുകൾ </p>
<hr/>
                 <h3>വാചകം</h3>
                <ol>
                  <li>മീൻ ഒരു ഭക്ഷ്യവിഭവമായി ഉപയോഗിക്കുന്നു</li>
                  
                </ol>

                
                    <h3>ഭാഷാഭേദങ്ങൾ</h3>
                    <p>മീൻ</p>
                    <p>മത്സ്യം</p>
                 </div>

                 
             
                </div>
                <div className={style.table}>
                  <div className={style.table1}>
                      <table>
                        <tr><td>നാമം</td></tr>
                        <hr/>
                        <tr>മീൻ</tr>
                        <tr>മത്സ്യം</tr>
                      </table>
                  </div>
                  <div className={style.table2}>
                  <table>
                        <tr><td>ക്രിയ</td></tr>
                         <hr/>
                        <tr>മീൻ പിടിക്കുക</tr>
                      </table>
                  </div>

                  <div className={style.table3}>
                  <table>
                        <tr><td>വിശേഷണം</td></tr>
                        <hr/>
                        <tr>മീൻ പിടിക്കുക</tr>
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
