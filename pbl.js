let family1=["Hindu Marriage Act, 1955","Special Marriage Act, 1954","Muslim Personal Law (Shariat) Application Act, 1937","Dowry Prohibition Act, 1961","rotection of Women from Domestic Violence Act, 2005"]
let family2=["Governs marriage, divorce, and related issues for Hindus, Buddhists, Sikhs, and Jains."," Provides a secular framework for marriages (often used for interfaith unions) and covers registration, divorce, and related matters","Establishes rules of inheritance and succession for Hindus, promoting gender equality in property rights.","Sets out the legal framework for adoption and maintenance obligations among Hindus.","Deals with the custody and welfare of minors, particularly in cases of divorce or separation."," Applies aspects of Sharia law to personal matters (marriage, divorce, inheritance) for Indian Muslims."," Prohibits the giving or taking of dowry and aims to curb dowry-related violence."," Provides protection and legal remedies to women facing domestic abuse and violence."]
let family3=[["•Contravening age requirements","The HMA sets minimum ages of 21 for grooms and 18 for brides. Violating these age requirements is punishable by imprisonment of up to 15 days or a fine of up to Rs 1,000, or both.","•Marriage between Sapindas","A marriage between two people who are related by Sapinda is void. The punishment for this includes imprisonment of up to one month and a fine of up to Rs 1,000, or both.","•Contravening other conditions","•Violating other conditions specified in the HMA can result in:","Rigorous imprisonment of up to two years or a fine of up to Rs 100,000, or both","Simple imprisonment of up to one month or a fine of up to Rs 1,000, or both"],[],[],[],[]]
let busin1=[]
let busin2=[]
let farm1=["Essential Commodities Act, 1955","Protection of Plant Varieties and Farmers’ Rights Act, 2001","Seeds Act, 1966","Agricultural Produce Grading and Marking Act, 1937","National Dairy Development Board Act"]
let farm2=["Empowers the government to regulate the production, supply, and distribution of essential commodities (including key agricultural products) to prevent hoarding and price manipulation.","Regulate the marketing of agricultural produce and ensure that farmers get fair prices by creating regulated market yards","Provides intellectual property protection for new plant varieties while safeguarding farmers’ rights to save, use, exchange, and sell seeds.","Regulates the quality and sale of seeds to ensure that farmers have access to certified, high-quality planting material","Establishes standards for grading and marking agricultural produce to improve market transparency and quality control"," Provides the framework for the development of the dairy industry, ensuring fair practices and support for dairy farmers in a key agricultural sector"]
let women1=["Protection of Women from Domestic Violence Act, 2005","Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act,2013","Indecent Representation of Women (Prevention) Act, 1986","National Commission for Women Act, 1990","The Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994"]
let women2=[" Provides civil remedies and protection for women facing physical, emotional, or economic abuse at home."," Mandates internal complaint mechanisms and prevention strategies in workplaces to protect women from sexual harassment."," Prohibits indecent representation of women through advertisements or other media, curbing objectification and exploitation."," Establishes a statutory body to advise the government on policies and measures for safeguarding women’s rights and interests."," Prohibits sex-selective practices and ensures that the use of diagnostic techniques does not reinforce gender discrimination."]
let envim1=["Environment (Protection) Act, 1986","Air (Prevention and Control of Pollution) Act, 1981","Wildlife Protection Act, 1972","Forest Conservation Act, 1980","Biological Diversity Act, 2002"]
let envim2=["The umbrella legislation empowering the government to take measures for environmental protection and control pollution","Regulates air quality by controlling the emission of pollutants from industrial and vehicular sources","Provides for the protection of wild animals, birds, and plants, and establishes national parks and sanctuaries","Regulates the diversion of forest land for non-forest purposes, safeguarding forests and biodiversity.","Aims to conserve biological diversity and ensure equitable sharing of benefits arising from the use of genetic resources"]
let emplo1=["Industrial Disputes Act, 1947","Factories Act, 1948","Payment of Bonus Act, 1965","Maternity Benefit Act, 1961 (as amended)","Employees’ Provident Funds and Miscellaneous Provisions Act, 1952"]
let emplo2=["Provides mechanisms for dispute resolution between employers and employees,including retrenchment and layoffs."," Regulates working conditions, safety, health, and welfare in factories."," Mandates a minimum wage for different sectors and regions, protecting workers from exploitation"," Requires payment of bonuses to employees based on profits and productivity in establishments with 20 or more workers."," Grants maternity leave and related benefits to female employees, now extended and modernized in recent amendments"," Establishes a compulsory savings scheme for retirement benefits, ensuring long-term social security."]
let i=0;
let col=document.getElementById("col")
let main=document.querySelectorAll(".laws")
let con=document.querySelector("#all")
let conh3=document.querySelector("#mainch3")
let conp=document.querySelector("#maincp")
main.forEach((law)=>{
    law.addEventListener("click",()=>{
        col.style="width: 28%; height: 400px; padding: 0px; position: relative; top: 25px;"
        let ids=law.getAttribute("id")
        con.innerHTML=""
    print(ids)
    //innernext(ids)
    })
})
let print=(id) =>{
    col.innerHTML="<h2>Important Acts</h2>"
    if(id==="family"){for(i=0;i<5;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${family1[i]}</h3></li>`  
    }}
    else if(id==="employ"){for(i=0;i<5;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3 class="employ">${emplo1[i]}</h3></li>`
    }}
    else if(id==="business"){for(i=0;i<5;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${busin1[i]}</h3></li>`
    }}
    else if(id==="environment"){for(i=0;i<5;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${envim1[i]}</h3></li>`
    }}
    else if(id==="women"){for(i=0;i<5;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${women1[i]}</h3></li>`
    }}
    else if(id==="farm"){for(i=0;i<5;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${farm1[i]}</h3></li>`
    }}

}


/* let innernext=(id)=>{
    if(id==="family"){for(i=0;i<10;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${family1[i]}</h3></li>`
    }}
    else if(id==="employ"){for(i=0;i<10;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3 class="employ">${emplo1[i]}</h3></li>`
    }}
    else if(id==="business"){for(i=0;i<10;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${busin1[i]}</h3></li>`
    }}
    else if(id==="environment"){for(i=0;i<10;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${envim1[i]}</h3></li>`
    }}
    else if(id==="women"){for(i=0;i<10;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${women1[i]}</h3></li>`
    }}
    else if(id==="farm"){for(i=0;i<10;i++){
        col.innerHTML=col.innerHTML+`<ul><li><h3>${farm1[i]}</h3></li>`
    }}
} */


