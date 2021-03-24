import React from "react";
import radium from "radium";
import GalleryNew from 'responsive-image-gallery';
const Gallery = () => {
    
    return(
        <React.Fragment>
    
    {/* <div>
        <ul id="bar">
         <li category="*">ALL</li>
         <li category="abstract">Abstract</li>
         <li category="space">Space</li>
     </ul>
     <div className="bttn" style={{textAlign: "center", marginLeft: "27%"}}>
            <button className="btn btn-default filterButton" id="target" category="all" >All</button>
            <button className="btn btn-default filterButton" category="hdpe" id="myCheck">Innovation Lab</button>
            <button className="btn btn-default filterButton"category="sprinkle">FDPS</button>
            
        </div>
      
     <div id="gallery">
         <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" category="abstract" />
         <img src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" category="space" />
         <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" category="abstract" />
         <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" category="space" />
         <img src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" category="abstract" />
         <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" category="space" />
     </div>
    </div> */}
    <div id="filters" class="container-fluid mb-5 mt-4">  
  <button class="btn btn-outline-primary" aria-pressed="true" data-filter="*">Todos</button>
  <button class="btn btn-outline-primary" data-filter=".design">Design</button>
  <button class="btn btn-outline-primary" data-filter=".webdesign">Web Design</button>
  <button class="btn btn-outline-primary" data-filter=".logotipos">Logotipos</button>
  <button class="btn btn-outline-primary" data-filter=".videomaker">VideoMaker</button>
</div>



<div class="grid"> 
   
  <div class="container">
      <div class="element-item design" data-category="design">
        <img src="https://cdn04.masterstudies.com/gfx/image/listing-page/80/main/Estudos-de-Design.jpg" class="w-100 h-100"></img>
      </div>

      <div class="element-item webdesign" data-category="webdesign">
        <img src="http://www.sirenconsultingfirm.com/wp-content/uploads/2014/11/responsive-web-design-300x200.jpg" class="w-100 h-100"></img>
      </div>
  
      <div class="element-item videomaker" data-category="videomaker">
        <img src="http://iphotochannel.com.br/wp-content/uploads/2017/08/iphoto-surfaceone-300x200.jpg" class="w-100 h-100"></img>
      </div>

      <div class="element-item webdesign" data-category="webdesign">
        <img src="http://www.sirenconsultingfirm.com/wp-content/uploads/2014/11/responsive-web-design-300x200.jpg" class="w-100 h-100"></img>
      </div>

      <div class="element-item logotipos" data-category="logotipos">
        <img src="https://designersbrasileiros.com.br/wp-content/uploads/2017/10/logotipos-com-mensagens-ocultas-300x200.png" class="w-100 h-100"></img>
      </div>

  </div>

</div>

    </React.Fragment>
    )

};



export default radium(Gallery);