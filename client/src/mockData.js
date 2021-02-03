const mockData = [{
    "id": 1,
    "price": "$223548.00",
    "details": "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
    "url": "http://opensource.org/massa/donec/dapibus/duis.html?non=sed&velit=justo&nec=pellentesque&nisi=viverra&vulputate=pede&nonummy=ac&maecenas=diam&tincidunt=cras&lacus=pellentesque&at=volutpat&velit=dui&vivamus=maecenas&vel=tristique&nulla=est&eget=et&eros=tempus&elementum=semper&pellentesque=est&quisque=quam&porta=pharetra&volutpat=magna&erat=ac&quisque=consequat&erat=metus&eros=sapien&viverra=ut&eget=nunc&congue=vestibulum&eget=ante&semper=ipsum&rutrum=primis&nulla=in&nunc=faucibus&purus=orci&phasellus=luctus&in=et&felis=ultrices&donec=posuere&semper=cubilia&sapien=curae&a=mauris&libero=viverra&nam=diam&dui=vitae&proin=quam&leo=suspendisse&odio=potenti&porttitor=nullam&id=porttitor&consequat=lacus&in=at&consequat=turpis&ut=donec&nulla=posuere&sed=metus&accumsan=vitae&felis=ipsum&ut=aliquam&at=non&dolor=mauris&quis=morbi&odio=non&consequat=lectus&varius=aliquam&integer=sit&ac=amet&leo=diam&pellentesque=in&ultrices=magna&mattis=bibendum&odio=imperdiet&donec=nullam&vitae=orci&nisi=pede&nam=venenatis&ultrices=non&libero=sodales&non=sed&mattis=tincidunt&pulvinar=eu&nulla=felis&pede=fusce&ullamcorper=posuere&augue=felis&a=sed",
    "imageLink": "http://dummyimage.com/231x237.bmp/5fa2dd/ffffff",
    "address": "354 Crownhardt Junction",
    "status": "Nissan",
    "ds": "07/14/2020",
    "monthlyMortgage": "$1939.19"
}, {
    "id": 2,
    "price": "$229830.16",
    "details": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",
    "url": "http://springer.com/ac/diam/cras/pellentesque.html?pretium=mauris&iaculis=viverra&diam=diam&erat=vitae&fermentum=quam&justo=suspendisse&nec=potenti&condimentum=nullam&neque=porttitor&sapien=lacus&placerat=at&ante=turpis&nulla=donec&justo=posuere&aliquam=metus&quis=vitae&turpis=ipsum&eget=aliquam&elit=non&sodales=mauris&scelerisque=morbi",
    "imageLink": "http://dummyimage.com/105x150.jpg/cc0000/ffffff",
    "address": "58 Bunting Junction",
    "status": "Buick",
    "ds": "12/19/2020",
    "monthlyMortgage": "$1440.03"
}, {
    "id": 3,
    "price": "$295302.24",
    "details": "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut",
    "url": "https://nifty.com/porta/volutpat/erat/quisque.jpg?vel=hac&ipsum=habitasse&praesent=platea&blandit=dictumst&lacinia=aliquam&erat=augue&vestibulum=quam&sed=sollicitudin&magna=vitae&at=consectetuer&nunc=eget&commodo=rutrum&placerat=at&praesent=lorem&blandit=integer&nam=tincidunt&nulla=ante&integer=vel&pede=ipsum&justo=praesent&lacinia=blandit&eget=lacinia&tincidunt=erat&eget=vestibulum&tempus=sed&vel=magna&pede=at&morbi=nunc&porttitor=commodo&lorem=placerat&id=praesent&ligula=blandit&suspendisse=nam&ornare=nulla&consequat=integer&lectus=pede&in=justo&est=lacinia&risus=eget&auctor=tincidunt&sed=eget&tristique=tempus&in=vel&tempus=pede&sit=morbi&amet=porttitor&sem=lorem&fusce=id&consequat=ligula&nulla=suspendisse&nisl=ornare&nunc=consequat&nisl=lectus&duis=in&bibendum=est&felis=risus&sed=auctor&interdum=sed&venenatis=tristique&turpis=in&enim=tempus&blandit=sit&mi=amet&in=sem&porttitor=fusce&pede=consequat&justo=nulla&eu=nisl&massa=nunc&donec=nisl&dapibus=duis&duis=bibendum&at=felis&velit=sed&eu=interdum&est=venenatis&congue=turpis&elementum=enim&in=blandit&hac=mi&habitasse=in&platea=porttitor&dictumst=pede&morbi=justo&vestibulum=eu&velit=massa&id=donec&pretium=dapibus&iaculis=duis&diam=at&erat=velit&fermentum=eu&justo=est&nec=congue&condimentum=elementum&neque=in&sapien=hac&placerat=habitasse&ante=platea&nulla=dictumst",
    "imageLink": "http://dummyimage.com/144x174.bmp/ff4444/ffffff",
    "address": "3829 Surrey Trail",
    "status": "Pontiac",
    "ds": "12/18/2020",
    "monthlyMortgage": "$2921.21"
}, {
    "id": 4,
    "price": "$296340.03",
    "details": "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
    "url": "http://mozilla.org/fusce/posuere/felis/sed/lacus.jsp?sollicitudin=morbi&vitae=quis&consectetuer=tortor&eget=id&rutrum=nulla&at=ultrices&lorem=aliquet&integer=maecenas&tincidunt=leo&ante=odio&vel=condimentum&ipsum=id&praesent=luctus&blandit=nec&lacinia=molestie&erat=sed&vestibulum=justo&sed=pellentesque&magna=viverra&at=pede&nunc=ac&commodo=diam&placerat=cras&praesent=pellentesque&blandit=volutpat&nam=dui&nulla=maecenas&integer=tristique&pede=est&justo=et&lacinia=tempus&eget=semper&tincidunt=est&eget=quam&tempus=pharetra&vel=magna&pede=ac&morbi=consequat&porttitor=metus&lorem=sapien&id=ut&ligula=nunc&suspendisse=vestibulum&ornare=ante&consequat=ipsum&lectus=primis&in=in&est=faucibus&risus=orci&auctor=luctus&sed=et&tristique=ultrices&in=posuere&tempus=cubilia&sit=curae&amet=mauris&sem=viverra&fusce=diam&consequat=vitae&nulla=quam&nisl=suspendisse&nunc=potenti",
    "imageLink": "http://dummyimage.com/133x187.png/5fa2dd/ffffff",
    "address": "1 Maple Wood Plaza",
    "status": "Eagle",
    "ds": "04/01/2020",
    "monthlyMortgage": "$2397.24"
}, {
    "id": 5,
    "price": "$308991.54",
    "details": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
    "url": "http://wired.com/suspendisse/potenti/cras/in/purus.jsp?nibh=rhoncus&ligula=aliquet&nec=pulvinar&sem=sed&duis=nisl&aliquam=nunc&convallis=rhoncus&nunc=dui&proin=vel&at=sem&turpis=sed&a=sagittis&pede=nam&posuere=congue&nonummy=risus&integer=semper&non=porta&velit=volutpat&donec=quam",
    "imageLink": "http://dummyimage.com/250x189.png/dddddd/000000",
    "address": "21 Bluejay Junction",
    "status": "Mitsubishi",
    "ds": "12/25/2020",
    "monthlyMortgage": "$1478.83"
}, {
    "id": 6,
    "price": "$326186.80",
    "details": "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
    "url": "http://theatlantic.com/consequat/morbi/a.json?enim=sapien&lorem=placerat&ipsum=ante&dolor=nulla&sit=justo&amet=aliquam&consectetuer=quis&adipiscing=turpis&elit=eget&proin=elit&interdum=sodales&mauris=scelerisque&non=mauris&ligula=sit&pellentesque=amet&ultrices=eros&phasellus=suspendisse&id=accumsan&sapien=tortor&in=quis&sapien=turpis&iaculis=sed&congue=ante&vivamus=vivamus&metus=tortor&arcu=duis",
    "imageLink": "http://dummyimage.com/135x123.bmp/5fa2dd/ffffff",
    "address": "917 Fair Oaks Pass",
    "status": "Plymouth",
    "ds": "11/24/2020",
    "monthlyMortgage": "$2746.78"
}, {
    "id": 7,
    "price": "$331078.97",
    "details": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas",
    "url": "https://state.tx.us/amet/cursus.html?in=sed&hac=ante&habitasse=vivamus&platea=tortor&dictumst=duis&maecenas=mattis&ut=egestas&massa=metus",
    "imageLink": "http://dummyimage.com/204x138.jpg/dddddd/000000",
    "address": "947 Granby Drive",
    "status": "Chevrolet",
    "ds": "05/29/2020",
    "monthlyMortgage": "$2696.88"
}, {
    "id": 8,
    "price": "$329664.30",
    "details": "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
    "url": "http://tamu.edu/nascetur/ridiculus/mus/vivamus/vestibulum/sagittis/sapien.jpg?nunc=semper&donec=rutrum&quis=nulla&orci=nunc&eget=purus&orci=phasellus&vehicula=in&condimentum=felis&curabitur=donec&in=semper&libero=sapien&ut=a&massa=libero&volutpat=nam&convallis=dui&morbi=proin&odio=leo&odio=odio&elementum=porttitor&eu=id&interdum=consequat&eu=in&tincidunt=consequat&in=ut&leo=nulla&maecenas=sed&pulvinar=accumsan&lobortis=felis&est=ut&phasellus=at&sit=dolor",
    "imageLink": "http://dummyimage.com/127x192.png/cc0000/ffffff",
    "address": "4 Graceland Lane",
    "status": "Buick",
    "ds": "02/16/2020",
    "monthlyMortgage": "$1864.00"
}, {
    "id": 9,
    "price": "$334174.56",
    "details": "eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse",
    "url": "https://reference.com/leo/odio/condimentum/id/luctus/nec.json?cras=mauris&in=sit&purus=amet&eu=eros&magna=suspendisse&vulputate=accumsan&luctus=tortor&cum=quis&sociis=turpis&natoque=sed",
    "imageLink": "http://dummyimage.com/232x190.png/5fa2dd/ffffff",
    "address": "06390 Eastwood Crossing",
    "status": "Cadillac",
    "ds": "01/23/2021",
    "monthlyMortgage": "$2886.29"
}, {
    "id": 10,
    "price": "$362284.68",
    "details": "laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
    "url": "http://wikimedia.org/posuere/nonummy/integer/non/velit.html?et=quam",
    "imageLink": "http://dummyimage.com/168x243.png/5fa2dd/ffffff",
    "address": "85932 Summerview Crossing",
    "status": "Chevrolet",
    "ds": "08/23/2020",
    "monthlyMortgage": "$1105.14"
}, {
    "id": 11,
    "price": "$214103.23",
    "details": "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
    "url": "http://instagram.com/volutpat/in/congue.json?ut=a&blandit=feugiat&non=et&interdum=eros&in=vestibulum&ante=ac&vestibulum=est&ante=lacinia&ipsum=nisi&primis=venenatis&in=tristique&faucibus=fusce&orci=congue&luctus=diam&et=id&ultrices=ornare&posuere=imperdiet&cubilia=sapien&curae=urna&duis=pretium&faucibus=nisl&accumsan=ut&odio=volutpat&curabitur=sapien&convallis=arcu&duis=sed&consequat=augue&dui=aliquam&nec=erat&nisi=volutpat&volutpat=in&eleifend=congue&donec=etiam&ut=justo&dolor=etiam&morbi=pretium&vel=iaculis&lectus=justo&in=in&quam=hac&fringilla=habitasse&rhoncus=platea&mauris=dictumst&enim=etiam&leo=faucibus&rhoncus=cursus&sed=urna&vestibulum=ut&sit=tellus&amet=nulla&cursus=ut&id=erat&turpis=id&integer=mauris&aliquet=vulputate&massa=elementum&id=nullam&lobortis=varius&convallis=nulla&tortor=facilisi&risus=cras&dapibus=non&augue=velit&vel=nec&accumsan=nisi&tellus=vulputate&nisi=nonummy&eu=maecenas&orci=tincidunt&mauris=lacus&lacinia=at&sapien=velit&quis=vivamus&libero=vel&nullam=nulla&sit=eget&amet=eros&turpis=elementum&elementum=pellentesque&ligula=quisque&vehicula=porta&consequat=volutpat&morbi=erat&a=quisque&ipsum=erat&integer=eros&a=viverra&nibh=eget&in=congue&quis=eget",
    "imageLink": "http://dummyimage.com/241x166.png/ff4444/ffffff",
    "address": "4465 Hudson Alley",
    "status": "Mercedes-Benz",
    "ds": "03/15/2020",
    "monthlyMortgage": "$2797.27"
}, {
    "id": 12,
    "price": "$292460.25",
    "details": "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et",
    "url": "http://army.mil/in/tempus/sit/amet/sem/fusce.png?mauris=rutrum&eget=rutrum&massa=neque&tempor=aenean&convallis=auctor&nulla=gravida&neque=sem&libero=praesent&convallis=id&eget=massa&eleifend=id&luctus=nisl&ultricies=venenatis&eu=lacinia&nibh=aenean&quisque=sit&id=amet&justo=justo&sit=morbi&amet=ut&sapien=odio",
    "imageLink": "http://dummyimage.com/135x172.jpg/dddddd/000000",
    "address": "37940 Arkansas Point",
    "status": "Mazda",
    "ds": "05/11/2020",
    "monthlyMortgage": "$1991.34"
}, {
    "id": 13,
    "price": "$281151.44",
    "details": "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo",
    "url": "https://google.nl/ipsum/primis/in.aspx?ornare=cras&consequat=non&lectus=velit&in=nec&est=nisi&risus=vulputate&auctor=nonummy&sed=maecenas&tristique=tincidunt&in=lacus&tempus=at&sit=velit&amet=vivamus&sem=vel&fusce=nulla&consequat=eget&nulla=eros&nisl=elementum&nunc=pellentesque&nisl=quisque&duis=porta&bibendum=volutpat&felis=erat&sed=quisque&interdum=erat&venenatis=eros&turpis=viverra&enim=eget&blandit=congue&mi=eget&in=semper&porttitor=rutrum&pede=nulla&justo=nunc&eu=purus&massa=phasellus&donec=in&dapibus=felis&duis=donec&at=semper&velit=sapien&eu=a&est=libero&congue=nam&elementum=dui&in=proin&hac=leo&habitasse=odio&platea=porttitor&dictumst=id&morbi=consequat&vestibulum=in&velit=consequat&id=ut&pretium=nulla&iaculis=sed&diam=accumsan&erat=felis&fermentum=ut&justo=at&nec=dolor&condimentum=quis&neque=odio&sapien=consequat&placerat=varius&ante=integer&nulla=ac&justo=leo&aliquam=pellentesque&quis=ultrices&turpis=mattis&eget=odio&elit=donec&sodales=vitae&scelerisque=nisi&mauris=nam&sit=ultrices&amet=libero&eros=non&suspendisse=mattis",
    "imageLink": "http://dummyimage.com/100x102.bmp/cc0000/ffffff",
    "address": "62580 Iowa Drive",
    "status": "Hyundai",
    "ds": "08/12/2020",
    "monthlyMortgage": "$1621.27"
}, {
    "id": 14,
    "price": "$288797.96",
    "details": "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
    "url": "https://msn.com/eu/orci/mauris/lacinia/sapien.aspx?tincidunt=magna&eu=bibendum&felis=imperdiet&fusce=nullam&posuere=orci&felis=pede&sed=venenatis",
    "imageLink": "http://dummyimage.com/213x219.png/dddddd/000000",
    "address": "224 Westport Hill",
    "status": "Chevrolet",
    "ds": "09/24/2020",
    "monthlyMortgage": "$2610.11"
}, {
    "id": 15,
    "price": "$303446.66",
    "details": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
    "url": "http://51.la/elementum/eu/interdum/eu/tincidunt/in/leo.html?quisque=malesuada&ut=in&erat=imperdiet&curabitur=et&gravida=commodo&nisi=vulputate&at=justo&nibh=in&in=blandit&hac=ultrices&habitasse=enim&platea=lorem&dictumst=ipsum&aliquam=dolor&augue=sit&quam=amet&sollicitudin=consectetuer&vitae=adipiscing&consectetuer=elit&eget=proin&rutrum=interdum&at=mauris&lorem=non&integer=ligula&tincidunt=pellentesque&ante=ultrices&vel=phasellus&ipsum=id&praesent=sapien&blandit=in&lacinia=sapien&erat=iaculis&vestibulum=congue&sed=vivamus&magna=metus&at=arcu&nunc=adipiscing&commodo=molestie&placerat=hendrerit&praesent=at&blandit=vulputate&nam=vitae&nulla=nisl&integer=aenean&pede=lectus&justo=pellentesque&lacinia=eget&eget=nunc&tincidunt=donec&eget=quis&tempus=orci&vel=eget&pede=orci&morbi=vehicula&porttitor=condimentum",
    "imageLink": "http://dummyimage.com/149x173.bmp/dddddd/000000",
    "address": "5 Longview Drive",
    "status": "Maybach",
    "ds": "10/31/2020",
    "monthlyMortgage": "$1858.27"
}, {
    "id": 16,
    "price": "$289970.96",
    "details": "pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac",
    "url": "https://statcounter.com/suspendisse/ornare/consequat/lectus.json?integer=enim&ac=sit&leo=amet&pellentesque=nunc&ultrices=viverra&mattis=dapibus&odio=nulla&donec=suscipit&vitae=ligula&nisi=in&nam=lacus&ultrices=curabitur&libero=at&non=ipsum&mattis=ac&pulvinar=tellus&nulla=semper&pede=interdum",
    "imageLink": "http://dummyimage.com/163x115.png/5fa2dd/ffffff",
    "address": "68531 Sheridan Circle",
    "status": "Mitsubishi",
    "ds": "08/31/2020",
    "monthlyMortgage": "$1957.14"
}, {
    "id": 17,
    "price": "$227629.62",
    "details": "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    "url": "https://bizjournals.com/morbi/a/ipsum.jpg?sit=quam&amet=sapien&turpis=varius&elementum=ut&ligula=blandit&vehicula=non&consequat=interdum&morbi=in&a=ante&ipsum=vestibulum&integer=ante&a=ipsum&nibh=primis&in=in&quis=faucibus&justo=orci&maecenas=luctus&rhoncus=et&aliquam=ultrices&lacus=posuere&morbi=cubilia&quis=curae&tortor=duis&id=faucibus&nulla=accumsan&ultrices=odio&aliquet=curabitur&maecenas=convallis&leo=duis&odio=consequat&condimentum=dui&id=nec&luctus=nisi&nec=volutpat&molestie=eleifend&sed=donec&justo=ut&pellentesque=dolor&viverra=morbi&pede=vel&ac=lectus&diam=in&cras=quam&pellentesque=fringilla&volutpat=rhoncus&dui=mauris&maecenas=enim&tristique=leo&est=rhoncus&et=sed&tempus=vestibulum&semper=sit&est=amet&quam=cursus&pharetra=id&magna=turpis&ac=integer&consequat=aliquet&metus=massa&sapien=id&ut=lobortis&nunc=convallis&vestibulum=tortor&ante=risus&ipsum=dapibus&primis=augue&in=vel&faucibus=accumsan&orci=tellus&luctus=nisi&et=eu&ultrices=orci&posuere=mauris&cubilia=lacinia&curae=sapien",
    "imageLink": "http://dummyimage.com/197x237.bmp/ff4444/ffffff",
    "address": "78 Corben Alley",
    "status": "Ford",
    "ds": "10/21/2020",
    "monthlyMortgage": "$2801.98"
}, {
    "id": 18,
    "price": "$274922.61",
    "details": "tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    "url": "https://webmd.com/iaculis/justo/in/hac/habitasse/platea.xml?vel=sit&lectus=amet&in=consectetuer&quam=adipiscing&fringilla=elit&rhoncus=proin&mauris=risus&enim=praesent&leo=lectus&rhoncus=vestibulum&sed=quam&vestibulum=sapien&sit=varius&amet=ut&cursus=blandit&id=non&turpis=interdum&integer=in&aliquet=ante&massa=vestibulum&id=ante&lobortis=ipsum&convallis=primis&tortor=in&risus=faucibus&dapibus=orci&augue=luctus&vel=et&accumsan=ultrices&tellus=posuere&nisi=cubilia&eu=curae&orci=duis&mauris=faucibus&lacinia=accumsan&sapien=odio&quis=curabitur&libero=convallis&nullam=duis&sit=consequat&amet=dui&turpis=nec&elementum=nisi&ligula=volutpat&vehicula=eleifend&consequat=donec&morbi=ut&a=dolor&ipsum=morbi&integer=vel&a=lectus&nibh=in&in=quam&quis=fringilla&justo=rhoncus&maecenas=mauris&rhoncus=enim&aliquam=leo&lacus=rhoncus&morbi=sed&quis=vestibulum&tortor=sit&id=amet&nulla=cursus&ultrices=id&aliquet=turpis&maecenas=integer&leo=aliquet&odio=massa&condimentum=id",
    "imageLink": "http://dummyimage.com/206x211.png/cc0000/ffffff",
    "address": "65 Golf View Avenue",
    "status": "Cadillac",
    "ds": "10/12/2020",
    "monthlyMortgage": "$2244.86"
}]

export default mockData;