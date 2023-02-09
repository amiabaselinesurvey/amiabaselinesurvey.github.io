"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[305],{8778:function(e,t,a){a.d(t,{Z:function(){return C}});var i=a(4562),n=a(4324),r=a(7423),s=a(6878),o=a(6669),l=a(1444),c=a(4263),d=a(7678),u=a(5352),p=a(4101),h=(0,d.Z)(r.Z,s.Z,l.Z,(0,c.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:e=>"string"===typeof e||!1===e},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:o.Z.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:e,bottom:t,footer:a,insetFooter:i,left:n,right:r,top:s}=this.$vuetify.application;return{paddingBottom:(0,u.kb)(t+a+i),paddingLeft:(0,u.kb)(n),paddingRight:(0,u.kb)(r),paddingTop:(0,u.kb)(e+s)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&(0,p.Jk)("auto-height",this),0==this.timeout&&(0,p.Rn)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,u.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[(0,u.z9)(this)])},genWrapper(){const e=this.hasBackground?this.setBackgroundColor:this.setTextColor,t=e(this.color,{staticClass:"v-snack__wrapper",class:r.Z.options.computed.classes.call(this),style:r.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",t,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((()=>{this.isActive=!1}),e))}},render(e){return e("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),g=function(){var e=this,t=e._self._c;return t(h,{attrs:{color:e.snackbarDetails?.color},scopedSlots:e._u([{key:"action",fn:function({attrs:a}){return[t(i.Z,e._b({attrs:{icon:"",color:"white"},on:{click:function(t){return e.closeSnackbar()}}},"v-btn",a,!1),[t(n.Z,[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarDetails?.text)+" ")])},v=[],f={name:"SnackbarLayout",computed:{snackbar:{get(){return this.$store.state.snackbar},set(){this.$store.dispatch("setSnackbarAction",!1),this.$store.dispatch("setSnackbarDetailsAction",null)}},snackbarDetails(){return this.$store.state.snackbarDetails}},methods:{closeSnackbar(){this.$store.dispatch("setSnackbarAction",!1),this.$store.dispatch("setSnackbarDetailsAction",null)}}},m=f,x=a(1001),b=(0,x.Z)(m,g,v,!1,null,null,null),C=b.exports},881:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var i=a(4562),n=a(4145),r=a(4886),s=a(266),o=a(5151),l=a(4061),c=a(4324),d=a(3305),u=a(1713),p=a(9481),h=a(3687),g=a(2082),v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-5 mx-10"},[t(u.Z,[t(s.Z,[t("h3",[e._v("List of Program Beneficiaries")])]),t(h.Z),t(s.Z,{staticClass:"text-right"},[e.$vuetify.breakpoint.smAndUp?t(i.Z,{attrs:{color:"primary",to:"/add"}},[t(c.Z,{attrs:{left:""}},[e._v("mdi-account-plus")]),e._v(" ADD BENEFICIARY ")],1):t(i.Z,{attrs:{fab:"",small:"",color:"primary",to:"/add"}},[t(c.Z,[e._v("mdi-account-plus")])],1)],1)],1),t("br"),t(u.Z,[t(s.Z,{attrs:{cols:"4"}},[t(p.Z,{attrs:{items:e.provincesOfRegion5,"menu-props":"auto",label:"Select a Province to filter","prepend-icon":"mdi-filter","single-line":"",width:"100",clearable:""},model:{value:e.selectedProvince,callback:function(t){e.selectedProvince=t},expression:"selectedProvince"}})],1)],1),e.selectedProvince?t("span",{staticClass:"text-caption"},[e._v(" Displaying beneficiaies under province: "),t("strong",[e._v(e._s(e.selectedProvince))])]):e._e(),t("br"),e.loading?t("div",{staticClass:"text-center mt-10"},[t(d.Z,{attrs:{indeterminate:"",color:"primary",size:50}})],1):t("div",[e.beneficiaries.length>0?t("div",[t(o.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.beneficiaries},scopedSlots:e._u([{key:"item.actions",fn:function({item:a}){return[t("div",{staticClass:"d-flex align-baseline"},[t(g.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:n}){return[t(c.Z,e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewBeneficiary(a)}}},"v-icon",n,!1),i),[e._v(" mdi-eye ")])]}}],null,!0)},[t("span",[e._v("View Beneficiary")])]),t(g.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:n}){return[t(c.Z,e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editBeneficiary(a)}}},"v-icon",n,!1),i),[e._v(" mdi-pencil ")])]}}],null,!0)},[t("span",[e._v("Edit Beneficiary")])]),t(g.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:n}){return[t(c.Z,e._g(e._b({attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},"v-icon",n,!1),i),[e._v(" mdi-delete ")])]}}],null,!0)},[t("span",[e._v("Delete Beneficiary")])])],1)]}}],null,!0)}),e._m(0)],1):t("p",{staticClass:"mt-10"},[e._v("No records found.")])]),t(l.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(n.Z,[t(r.EB,{staticClass:"text-h6"},[e._v(" Are you sure you want to delete Survey No: "+e._s(e.deletedItem.surveyNo)+"? ")]),t("br"),t(r.Qq,[e._v(" Deleting this removes the beneficiary from the list. ")]),t(r.h7,[t(h.Z),t(i.Z,{attrs:{disabled:e.loading,color:"grey",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(i.Z,{attrs:{disabled:e.loading,loading:e.loading,color:"error"},on:{click:e.deleteItemConfirm}},[e._v(" Delete ")])],1)],1)],1),t("SnackbarLayout")],1)},f=[function(){var e=this,t=e._self._c;return t("div",[t("strong",[e._v("Note:")]),t("div",[t("p",[t("span",{staticClass:"ml-2 text-caption"},[t("strong",[e._v("*")]),e._v(" for the last 20-30 years")])]),t("p",[t("span",{staticClass:"ml-2 text-caption"},[t("strong",[e._v("**")]),e._v(" Constraints/Difficulties in Changing Farming Ways")])])])])}],m=(a(1703),a(8778)),x=a(6883),b=a(3247),C=a(1721),w=a(5380);const I=[{text:"Actions",value:"actions",sortable:!1},{text:"Survey No.",value:"surveyNo",align:"center",width:"110px"},{text:"Date",sortable:!1,value:"date",align:"center"},{text:"Interview Start",sortable:!1,width:"120px",align:"center",value:"interviewStart"},{text:"Interview End",sortable:!1,width:"120px",align:"center",value:"interviewEnd"},{text:"Name of Interviewer",sortable:!1,value:"nameOfInterviewer",width:"200px",align:"center"},{text:"(1.1) Province",sortable:!1,value:"province",width:"200px",align:"center"},{text:"(1.2) City/Municipality",sortable:!1,value:"cityOrMunicipality",width:"200px",align:"center"},{text:"(1.3) Barangay",sortable:!1,width:"120px",align:"center",value:"barangay"},{text:"(1.4) Name of Farmer",sortable:!1,width:"150px",align:"center",value:"nameOfFarmer"},{text:"(1.5) Contact No.",sortable:!1,width:"130px",align:"center",value:"contactNo"},{text:"(1.6) Farmer's Code No.",sortable:!1,value:"farmersCodeNo",width:"200px",align:"center"},{text:"(2.1) Age",sortable:!1,value:"age",width:"90px",align:"center"},{text:"(2.2) Gender",sortable:!1,value:"gender",width:"100px",align:"center"},{text:"(2.3) Civil Status",sortable:!1,value:"civilStatus",width:"130px",align:"center"},{text:"(2.4) Religion",sortable:!1,value:"religion",width:"120px",align:"center"},{text:"(2.5) Beloning To",sortable:!1,value:"belongingTo",width:"130px",align:"center"},{text:"(2.6) Household Members (farmer not included)",sortable:!1,value:"householdMembers",width:"350px",align:"center"},{text:"(2.7) Years of Farming Experience",sortable:!1,value:"yearsOfFarmingExperience",width:"300px",align:"center"},{text:"(2.8) Highest Educational Attainment",sortable:!1,value:"highestEducationalAttainment",width:"200px",align:"center"},{text:"(2.9) Languages/Dialects spoken",sortable:!1,value:"languagesOrDialectsSpoken",width:"200px",align:"center"},{text:"(2.10) Main Source of Income",sortable:!1,value:"mainSourceOfIncome",width:"200px",align:"center"},{text:"(2.11) Other Sources of Income",sortable:!1,value:"otherSourcesOfIncome",width:"200px",align:"center"},{text:"(2.12) Average Gross Monthly Income of Household (PhP)",sortable:!1,value:"averageGrossMonthlyIncomeOfHousehold",width:"200px",align:"center"},{text:"(2.13) Average Gross Monthly Farm Income (PhP)",sortable:!1,value:"averageGrossMonthlyFarmIncome",width:"200px",align:"center"},{text:"(2.14) Membership In A Farmer Group/Association/Organization",sortable:!1,value:"membershipInAFarmerGroupOrAssociationOrOrganization",width:"200px",align:"center"},{text:"(2.15) Enrolled in Registry System for Basic Sectors In Agriculture (RSBSA)",sortable:!1,value:"enrolledInRegistrySystemForBasicSectorsInAgriculture",width:"200px",align:"center"},{text:"(3.1) Total Area of Agricultural Land (ha)",sortable:!1,value:"totalAreaOfAgriculturalLand",width:"200px",align:"center"},{text:"(3.2) Total Area of Forestry Land (ha)",sortable:!1,value:"totalAreaOfForestryLand",width:"200px",align:"center"},{text:"(3.3) Total Cultivated Area (ha)",sortable:!1,value:"totalCultivatedArea",width:"200px",align:"center"},{text:"(3.4) Distance from Home to Farm (km)",sortable:!1,value:"distanceFromHomeToFarm",width:"200px",align:"center"},{text:"(3.5) Distance from Land to Water Source (km)",sortable:!1,value:"distanceFromLandToWaterSource",width:"200px",align:"center"},{text:"(3.6) Distance from Market Nearest Paved (concrete/asphalt) road (km)",sortable:!1,value:"distanceFromMarketNearestPavedRoad",width:"200px",align:"center"},{text:"(3.7) Distance from Market/Trading Post (km)",sortable:!1,value:"distanceFromMarketOrTradingPost",width:"200px",align:"center"},{text:"(3.8) Irrigation Source",sortable:!1,value:"irrigationSource",width:"200px",align:"center"},{text:"(3.9) Months Without Rain",sortable:!1,value:"monthsWithoutRain",width:"200px",align:"center"},{text:"(3.10) Position in the Landscape",sortable:!1,value:"positionInTheLandscape",width:"200px",align:"center"},{text:"(3.11) Location of Farm",sortable:!1,value:"locationOfFarm",width:"200px",align:"center"},{text:"(3.12) Land Tenure",sortable:!1,value:"landTenure",width:"200px",align:"center"},{text:"(3.13) Tenancy",sortable:!1,value:"tenancy",width:"200px",align:"center"},{text:"(3.14) Land Holding",sortable:!1,value:"landHolding",width:"200px",align:"center"},{text:"(4.1) Agricultural Activities",sortable:!1,value:"agriculturalActivities",width:"200px",align:"center"},{text:"(4.2) Crops Produced",sortable:!1,value:"cropsProduced",width:"200px",align:"center"},{text:"(4.3) Land Area Devoted For Crop Production (ha)",sortable:!1,value:"landAreaDevotedForCropProduction",width:"200px",align:"center"},{text:"(4.4) Livestock Raised/Produced",sortable:!1,value:"livestockRaisedOrProduced",width:"200px",align:"center"},{text:"(4.5) Land Area Devoted For Livestock Production (ha)",sortable:!1,value:"landAreaDevotedForLivestockProduction",width:"200px",align:"center"},{text:"(4.6) Species grown for Aquaculture",sortable:!1,value:"speciesGrownForAquaculture",width:"200px",align:"center"},{text:"(4.7) Land Area Devoted for Aquaculture (ha)",sortable:!1,value:"landAreaDevotedForAquaculture",width:"200px",align:"center"},{text:"(4.8) Source of Water for Aquaculture",sortable:!1,value:"sourceOfWaterForAquaculture",width:"200px",align:"center"},{text:"(4.9) Cropping Pattern",sortable:!1,value:"croppingPattern",width:"200px",align:"center"},{text:"(4.10) Crop Calendar (Wet Season) - Land Preparation",sortable:!1,value:"cropCalendarWetSeasonLandPreparation",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Wet Season) - Planting",sortable:!1,value:"cropCalendarWetSeasonPlanting",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Wet Season) - Growing",sortable:!1,value:"cropCalendarWetSeasonGrowing",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Wet Season) - Harvesting",sortable:!1,value:"cropCalendarWetSeasonHarvesting",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Dry Season) - Land Preparation",sortable:!1,value:"cropCalendarDrySeasonLandPreparation",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Dry Season) - Planting",sortable:!1,value:"cropCalendarDrySeasonPlanting",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Dry Season) - Growing",sortable:!1,value:"cropCalendarDrySeasonGrowing",width:"350px",align:"center"},{text:"(4.10) Crop Calendar (Dry Season) - Harvesting",sortable:!1,value:"cropCalendarDrySeasonHarvesting",width:"350px",align:"center"},{text:"(4.11) Estimated Gross Income Per Cropping (PhP) - 1st Cropping",sortable:!1,value:"estimatedGrossIncomePerCroppingFirstCropping",width:"200px",align:"center"},{text:"(4.11) Estimated Gross Income Per Cropping (PhP) - 2nd Cropping",sortable:!1,value:"estimatedGrossIncomePerCroppingSecondCropping",width:"200px",align:"center"},{text:"(5.1) Attended Agricultural-related Trainings",sortable:!1,value:"attendedAgriculturalRelatedTrainings",width:"200px",align:"center"},{text:"(5.2) Total Number of Trainings Attended",sortable:!1,value:"totalNumberOfTrainingsAttended",width:"200px",align:"center"},{text:"(5.3) Source of Information Related to Improving Agricultural Production",sortable:!1,value:"sourceOfInformationRelatedToImprovingAgriculturalProduction",width:"200px",align:"center"},{text:"(5.4) Source of Information Related to Improving Agricultural Product Processing",sortable:!1,value:"sourceOfInformationRelatedToImprovingAgriculturalProductProcessing",width:"200px",align:"center"},{text:"(5.5) Source of Climate and Weather Information",sortable:!1,value:"sourceOfClimateAndWeatherInformation",width:"200px",align:"center"},{text:"(5.6) Observed Any Long-term Changes in Climate (temperature/rainfall) *",sortable:!1,value:"observedAnyLongTermChangesInClimate",width:"200px",align:"center"},{text:"(5.7.1) Long-term Changes in Climate for Temperature *",sortable:!1,value:"changesInClimateForTemperature",width:"200px",align:"center"},{text:"(5.7.2) Long-term Changes in Climate for Amount of Rainfaill *",sortable:!1,value:"changesInClimateForAmountOfRainfaill",width:"200px",align:"center"},{text:"(5.7.3) Long-term Changes in Climate for Rainfall Timing *",sortable:!1,value:"changesInClimateForRainfallTiming",width:"200px",align:"center"},{text:"(5.7.4) Long-term Changes in Climate for Rainful Intensity *",sortable:!1,value:"changesInClimateForRainfulIntensity",width:"200px",align:"center"},{text:"(5.7.5) Long-term Changes in Climate for Rainfall Duration *",sortable:!1,value:"changesInClimateForRainfallDuration",width:"200px",align:"center"},{text:"(5.7.6) Long-term Changes in Climate for Number of Weather Events *",sortable:!1,value:"changesInClimateForNumberOfWeatherEvents",width:"200px",align:"center"},{text:"(5.7.7) Long-term Changes in Climate for Number of Hot Days *",sortable:!1,value:"changesInClimateForNumberOfHotDays",width:"200px",align:"center"},{text:"(5.7.8) Long-term Changes in Climate for Number of Rainy Days *",sortable:!1,value:"changesInClimateForNumberOfRainyDays",width:"200px",align:"center"},{text:"(5.7.9) Long-term Changes in Climate for Occurence of Pests And Diseases in Crops *",sortable:!1,value:"changesInClimateForOccurenceOfPestsAndDiseasesInCrops",width:"200px",align:"center"},{text:"(5.7.10) Long-term Changes in Climate for Occurence of Pests And Diseases in Livestock *",sortable:!1,value:"changesInClimateForOccurenceOfPestsAndDiseasesInLivestock",width:"200px",align:"center"},{text:"(5.7.11) Observed any change in the Onset of Dry Season",sortable:!1,value:"observedAnyChangeInTheOnsetOfDrySeason",width:"200px",align:"center"},{text:"(5.7.12) Observed any change in the Onset of Wet Season",sortable:!1,value:"observedAnyChangeInTheOnsetOfWetSeason",width:"200px",align:"center"},{text:"(5.8.1) Description of Change in Temperature",sortable:!1,value:"descriptionOfChangeInTemperature",width:"200px",align:"center"},{text:"(5.8.2) Description of Change in Rainfall Duration",sortable:!1,value:"descriptionOfChangeInRainfallDuration",width:"200px",align:"center"},{text:"(5.8.3) Description of Change in Rainfall Timing",sortable:!1,value:"descriptionOfChangeInRainfallTiming",width:"200px",align:"center"},{text:"(5.8.4) Description of Change in Rainfall Intensity",sortable:!1,value:"descriptionOfChangeInRainfallIntensity",width:"200px",align:"center"},{text:"(5.8.5) Description of Change in Number of Weather Events",sortable:!1,value:"descriptionOfChangeInNumberOfWeatherEvents",width:"200px",align:"center"},{text:"(5.9.1) Perceived Effects/Impacts of: Change in Timing of Rains",sortable:!1,value:"perceivedEffectsOrImpactsOfChangeInTimingOfRains",width:"200px",align:"center"},{text:"(5.9.2) Perceived Effects/Impacts of: Abrupt Change in Seasons/Changes in Growing Season",sortable:!1,value:"perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason",width:"200px",align:"center"},{text:"(5.9.3) Perceived Effects/Impacts of: Reduced Cropping (Growing) Season",sortable:!1,value:"perceivedEffectsOrImpactsOfReducedCroppingSeason",width:"200px",align:"center"},{text:"(5.9.4) Perceived Effects/Impacts of: Increased Frequency Of Drought and Crop Failure",sortable:!1,value:"perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure",width:"200px",align:"center"},{text:"(5.9.5) Perceived Effects/Impacts of: Increased Frequency Of Floods and Farm Destructions",sortable:!1,value:"perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions",width:"200px",align:"center"},{text:"(5.9.6) Perceived Effects/Impacts of: Postharvest Losses",sortable:!1,value:"perceivedEffectsOrImpactsOfPostharvestLosses",width:"200px",align:"center"},{text:"(5.9.7) Perceived Effects/Impacts of: Pest Invasion",sortable:!1,value:"perceivedEffectsOrImpactsOfPestInvasion",width:"200px",align:"center"},{text:"(5.9.8) Perceived Effects/Impacts of: Prevalence of Pests and Diseases",sortable:!1,value:"perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases",width:"200px",align:"center"},{text:"(5.9.9) Perceived Effects/Impacts of: Poverty and Food Shortages",sortable:!1,value:"perceivedEffectsOrImpactsOfPovertyAndFoodShortages",width:"200px",align:"center"},{text:"(5.9.10) Perceived Effects/Impacts of: Lack of Potable Water (Drinking)",sortable:!1,value:"perceivedEffectsOrImpactsOfLackOfPotableWater",width:"200px",align:"center"},{text:"(5.9.11) Perceived Effects/Impacts of: Reduced Volume Of Irrigation Water",sortable:!1,value:"perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater",width:"200px",align:"center"},{text:"(5.9.12) Perceived Effects/Impacts of: Erosions",sortable:!1,value:"perceivedEffectsOrImpactsOfErosions",width:"200px",align:"center"},{text:"(5.9.13) Perceived Effects/Impacts of: Extinction of Fishes and Aquatic Life",sortable:!1,value:"perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife",width:"200px",align:"center"},{text:"(5.9.14) Perceived Effects/Impacts of: ExtinctionOfSomeCropsAndCropVarieties",sortable:!1,value:"perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties",width:"200px",align:"center"},{text:"(5.9.15) Perceived Effects/Impacts of: Death of Livestock",sortable:!1,value:"perceivedEffectsOrImpactsOfDeathOfLivestock",width:"200px",align:"center"},{text:"(5.9.16) Perceived Effects/Impacts of: Decreased Livestock Production",sortable:!1,value:"perceivedEffectsOrImpactsOfDecreasedLivestockProduction",width:"200px",align:"center"},{text:"(5.9.17) Perceived Effects/Impacts of: Rising Cost of Farming and Fishing",sortable:!1,value:"perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing",width:"200px",align:"center"},{text:"(5.9.18) Perceived Effects/Impacts of: Destruction of Farm Roads and Homes",sortable:!1,value:"perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes",width:"200px",align:"center"},{text:"(5.9.19) Perceived Effects/Impacts of: Rural-Urban Migration",sortable:!1,value:"perceivedEffectsOrImpactsOfRuralUrbanMigration",width:"200px",align:"center"},{text:"(5.9.20) Perceived Effects/Impacts of: Siltation of Water Bodies",sortable:!1,value:"perceivedEffectsOrImpactsOfSiltationOfWaterBodies",width:"200px",align:"center"},{text:"(5.9.21) Perceived Effects/Impacts of: Disappearance of Vegetation Cover",sortable:!1,value:"perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover",width:"200px",align:"center"},{text:"(5.9.22) Perceived Effects/Impacts of: Others",sortable:!1,value:"perceivedEffectsOrImpactsOfOthers",width:"200px",align:"center"},{text:"(5.10) Observed Main Opportunities (Positive Effects/Impacts) of These Long-term Changes in Climate *",sortable:!1,value:"observedMainOpportunitiesOfLongTermChangesInClimate",width:"200px",align:"center"},{text:"(5.11.1) Drivers of Change and Vulnerability of: Land Degradation (Soil Nutrient Depletion)",sortable:!1,value:"driversOfChangeAndVulnerabilityOfLandDegredation",width:"200px",align:"center"},{text:"(5.11.2) Drivers of Change and Vulnerability of: Unexpexcted Changes in Input Prices",sortable:!1,value:"driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices",width:"200px",align:"center"},{text:"(5.11.3) Drivers of Change and Vulnerability of: Unexpected Changes in Product Prices",sortable:!1,value:"driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices",width:"200px",align:"center"},{text:"(5.11.4) Drivers of Change and Vulnerability of: Risks for Diseases and Pests Affecting Crops and Animals",sortable:!1,value:"driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals",width:"400px",align:"center"},{text:"(5.11.5) Drivers of Change and Vulnerability of: Others",sortable:!1,value:"driversOfChangeAndVulnerabilityOfOthers",width:"200px",align:"center"},{text:"(6.1) Made adjustments in Livelihood in Response to the Perceived Changes in Rainfall and Temperature over the last 10 years",sortable:!1,value:"madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years",width:"450px",align:"center"},{text:"(6.2) Changes/Adjustments Made In Farming in Response to Long-term shifts in Temperature and Rainfall",sortable:!1,value:"changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall",width:"400px",align:"center"},{text:"(6.3) Additional Adaptation Measures Being Considered in the Future",sortable:!1,value:"additionalAdaptationMeasuresBeingConsideredInTheFuture",width:"150px",align:"center"},{text:"(6.4) Receive Any External Support for Adaptation Measures",sortable:!1,value:"receivedAnyExternalSupportForAdaptationMeasures",width:"150px",align:"center"},{text:"(6.5.1) Form of Financial Support received",sortable:!1,value:"formOfFinancialSupportReceived",width:"150px",align:"center"},{text:"(6.5.2) Form of Material Support received",sortable:!1,value:"formOfMaterialSupportReceived",width:"150px",align:"center"},{text:"(6.5.3) Form of Extension Services Support received",sortable:!1,value:"formOfExtensionServicesSupportReceived",width:"150px",align:"center"},{text:"(6.5.4) Form of Farming Fishing Advisories Based On Weather and Climate Support received",sortable:!1,value:"FarmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived",width:"150px",align:"center"},{text:"(6.5.5) Form of Infrastructure Support received",sortable:!1,value:"formOfInfrastructureSupportReceived",width:"150px",align:"center"},{text:"(6.5.6) Form of Other Support received",sortable:!1,value:"formOfOtherSupportReceived",width:"150px",align:"center"},{text:"(6.6) Most Beneficial Support Services",sortable:!1,value:"mostBeneficialSupportServices",width:"150px",align:"center"},{text:"(6.7.1) Low Education Level Constraint **",sortable:!1,value:"lowEducationLevelConstraint",width:"150px",align:"center"},{text:"(6.7.2) Limited Access to Information Constraint **",sortable:!1,value:"limitedAccessToInformationConstraint",width:"150px",align:"center"},{text:"(6.7.3) Lack of Extension Services Constraint **",sortable:!1,value:"lackOfExtensionServicesConstraint",width:"150px",align:"center"},{text:"(6.7.4) CRA Options Not Compatible With Community Norms and Values Constraint **",sortable:!1,value:"craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint",width:"150px",align:"center"},{text:"(6.7.5) Inadequate Capital Constraint **",sortable:!1,value:"inadequateCapitalConstraint",width:"150px",align:"center"},{text:"(6.7.6) No Access to Water for Irrigation Constraint **",sortable:!1,value:"noAccessToWaterForIrrigationConstraint",width:"150px",align:"center"},{text:"(6.7.7) No Access to Credit Constraint **",sortable:!1,value:"noAccessToCreditConstraintConstraint",width:"150px",align:"center"},{text:"(6.7.8) Longer Time Required to See Results Constraint **",sortable:!1,value:"longerTimeRequiredToSeeResultsConstraint",width:"150px",align:"center"},{text:"(6.7.9) Old Age Constraint **",sortable:!1,value:"oldAgeConstraint",width:"150px",align:"center"},{text:"(6.7.10) Land Tenure/Land Ownership Issues Constraint **",sortable:!1,value:"landTenureOrLandOwnershipIssuesConstraint",width:"150px",align:"center"},{text:"(6.7.11) Land Topography Not Suitable Constraint **",sortable:!1,value:"landTopographyNotSuitableConstraint",width:"150px",align:"center"},{text:"(6.7.12) Labor Intensive/Non-availability of Labor Constraint **",sortable:!1,value:"laborIntensiveOrNonAvailabilityOfLaborConstraint",width:"150px",align:"center"},{text:"(6.7.13) Infertile Soil Constraint **",sortable:!1,value:"infertileSoilConstraint",width:"150px",align:"center"},{text:"(6.7.14) Other Constraint **",sortable:!1,value:"otherConstraint",width:"150px",align:"center"},{text:"(7.1): Access to Agirculture/Fisheries R&D Institutions",sortable:!1,value:"accessToAgricultureOrFisheriesRnDInstitutions",width:"150px",align:"center"},{text:"(7.2): Access to Credit",sortable:!1,value:"accessToCredit",width:"150px",align:"center"},{text:"(7.3): Laboratory Facilities",sortable:!1,value:"laboratoryFacilities",width:"150px",align:"center"},{text:"(7.4): Education and Health Facilities",sortable:!1,value:"educationAndHealthFacilities",width:"150px",align:"center"},{text:"(7.5): Farmers' Groups, Associations, Cooperatives; Non-Government Organizations; Irrigator's Associations",sortable:!1,value:"farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations",width:"150px",align:"center"},{text:"(7.6): Marketing System",sortable:!1,value:"marketingSystem",width:"150px",align:"center"},{text:"(7.7): Presence of Agricultural Processing Facilities",sortable:!1,value:"presenceOfAgriculturalProcessingFacilities",width:"150px",align:"center"},{text:"(7.8): Irrigation",sortable:!1,value:"irrigation",width:"150px",align:"center"},{text:"(7.9): Farming Equipment",sortable:!1,value:"farmingEquipment",width:"150px",align:"center"},{text:"(7.10): Others",sortable:!1,value:"others",width:"150px",align:"center"},{text:"(8) Issues/Concerns/Problems in Farming",sortable:!1,value:"issuesOrConcernsOrProblemsInFarming",width:"150px",align:"center"}];var O={components:{SnackbarLayout:m.Z},data:()=>({headers:I,dialogDelete:!1,deletedIndex:-1,deletedItem:{},loading:!1,selectedProvince:null,beneficiaries:[]}),mounted(){this.initialize()},computed:{provincesOfRegion5(){return(0,w.H)()}},watch:{dialogDelete(e){e||this.closeDelete()},selectedProvince(){this.beneficiaries=this.$store.getters.beneficiariesPerProvince(this.selectedProvince)}},methods:{initialize(){try{this.loading=!0;const e=(0,b.IO)((0,b.hJ)(x.db,"beneficiaries"),(0,b.Xo)("createdAt","desc"));(0,b.cf)(e,(e=>{let t=[];e.forEach((e=>{const{part0:a,part1:i,part2:n,part3:r,part4:s,part5:o,part6:l,part7:c,part8:d,createdAt:u,userId:p,id:h}=e.data(),g={...a,...i,...n,...r,...s,...o,...l,...c,...d,createdAt:u,userId:p,id:h,beneficiaryId:e.id};t.push(g)})),this.beneficiaries=t,this.loading=!1}))}catch(e){console.error(e),this.$store.dispatch("setSnackbarAction",!0),this.$store.dispatch("setSnackbarDetailsAction",{color:"error",text:"Failed to load data! Please contact admin."}),this.loading=!1,this.beneficiaries=[]}},viewBeneficiary(e){this.$router.push({name:"ViewBeneficiaryView",params:{content:e,mode:"VIEW",id:e.id}})},editBeneficiary(e){this.$router.push({name:"EditBeneficiaryView",params:{content:e,mode:"EDIT",id:e.id}})},deleteItem(e){this.deletedItem=e,this.dialogDelete=!0},async deleteItemConfirm(){try{this.loading=!0;const e=await(0,C.Te)(this.deletedItem);if(null===e)throw"Something went wrong.";this.$store.dispatch("setSnackbarAction",!0),this.$store.dispatch("setSnackbarDetailsAction",{color:"success",text:"Successfully deleted beneficiary!"}),this.closeDelete()}catch(e){throw this.$store.dispatch("setSnackbarAction",!0),this.$store.dispatch("setSnackbarDetailsAction",{color:"error",text:"Failed deleting a beneficiary! Please contact admin."}),this.closeDelete(),new Error(e)}},closeDelete(){this.dialogDelete=!1,this.loading=!1,this.$nextTick((()=>{this.deletedItem=Object.assign({},{}),this.deletedIndex=-1}))}}},A=O,y=a(1001),S=(0,y.Z)(A,v,f,!1,null,null,null),P=S.exports}}]);
//# sourceMappingURL=Beneficiaries.045e355b.js.map