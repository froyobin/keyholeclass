Calendar.prototype.header=function(){
	this.c_h_tb=_create('table');
	this.c_h_tbody=_create('tbody');
	this.c_h_tb_tr=_create('tr');
	this.c_h_tb_td_l=_create('td');
	this.c_h_tb_th=_create('th');
	this.c_h_tb_td_c=_create('td');
	this.c_h_tb_td_r=_create('td');
	this.c_h_tb_td_img=_create('img');
	this.c_h_tb_td_img2=_create('img');
	this.c_h_tb.className='Header';	
	this.c_h_tb.cellspacing='0';
	this.c_h_tb.cellpadding='0';
	this.c_h_tb.border='0';
	this.c_h_tb_td_l.className='HeaderLeft';
	this.c_h_tb_td_r.className='HeaderRight';
	this.c_h_tb_td_img.src='/media/static/images/Spacer.gif';
	this.c_h_tb_td_img2.src='/media/static/images/Spacer.gif';
	this.c_h_tb_td_c.className='tbg';
	
	this.hid=_create('input');
	this.hid_rday=_create('input');
	this.hid_rday.type='hidden';
	this.hid_rday.id='rday';
	this.hid.type='hidden';
		 
	var startdate=this.date;
		startdate.addDays(-startdate.getDay());
	var enddate=addDays(startdate,6);

	
	this.c_h_tb_th.innerHTML=startdate.format("yyyy - MM - dd ")
								 +' ── '+
								 enddate.format("yyyy - MM - dd ");
	
	
	this.hid.value=startdate.format("MM/dd/yyyy");
	this.hid.id='date';
	this.c_h_tb_td_l.appendChild(this.c_h_tb_td_img);
	this.c_h_tb_td_r.appendChild(this.c_h_tb_td_img2);
	
	this.c_h_tb_sz=_create('a');
	this.c_h_tb_sz.className='c_sz';
	this.c_h_tb_td_c.appendChild(this.c_h_tb_sz);
	this.c_h_tb_td_c.appendChild(this.hid);
	this.c_h_tb_td_c.appendChild(this.hid_rday);
	this.c_h_tb_tr.appendChild(this.c_h_tb_td_l); 
	this.c_h_tb_tr.appendChild(this.c_h_tb_th); 
	this.c_h_tb_tr.appendChild(this.c_h_tb_td_c); 
	this.c_h_tb_tr.appendChild(this.c_h_tb_td_r); 
	this.c_h_tbody.appendChild(this.c_h_tb_tr);
	this.c_h_tb.appendChild(this.c_h_tbody);
	this.content.appendChild(this.c_h_tb);		
	
}
Calendar.prototype.list=function(){
	this.c_h_tb=_create('table');
	this.c_h_tbody=_create('tbody');
	this.c_h_tb_tr_top=_create('tr');
	this.c_h_tb_td_top=_create('td');
	this.c_h_tb_td_top.valign='top';

	this.c_h_tb.className='Calendar';
	this.gridHead=new GridHead(this.date,this.language);
	this.gridList=new GridList(this.date,this.language);
	this.c_h_tb_td_top.appendChild(this.gridHead);
	this.c_h_tb_td_top.appendChild(this.gridList);
	this.c_h_tb_tr_top.appendChild(this.c_h_tb_td_top);
	this.c_h_tbody.appendChild(this.c_h_tb_tr_top);
	this.c_h_tb.appendChild(this.c_h_tbody);
	
	this.content.appendChild(this.c_h_tb);
}

var GridHead=function(date,language){
	this.c_g_tb=_create('table');
	this.c_g_tbody=_create('tbody');
	this.c_g_tb.className='Grid';
	
	this.date=date; 
	this.date.addDays(-date.getDay()); 
	this.week = language.weekArray;
	
		this.c_g_tr=_create('tr');
		
		for(var j=-1;j<8;j++){
			
			if(j<0){
				this.c_g_td=_create('td');
				this.c_g_td.className='CalendarWeek_endName';
				this.c_g_td.style.width='6%';
				this.c_g_td.innerHTML='';
				this.c_g_td.style.background='#eee'; 
				this.c_g_tr.appendChild(this.c_g_td);	
			}else if(j==7){
				this.c_g_td=_create('td');
				this.c_g_td.className='CalendarWeek_endName';
				this.c_g_td.style.width='16px';
				this.c_g_td.innerHTML='';
				this.c_g_td.style.background='#eee'; 
				this.c_g_tr.appendChild(this.c_g_td);	
			}else{
				this.c_g_td=_create('td');
				this.c_g_td.className='CalendarWeek_endName';
				
				var l_date=addDays(date,j);
				this.c_g_td.innerHTML=this.week[j]+ '【'+l_date.format("yyyy-MM-dd")+'】';
				this.c_g_td.style.background='#eee'; 
				this.c_g_tr.appendChild(this.c_g_td);
			}
		}
		this.c_g_tbody.appendChild(this.c_g_tr);
	
	this.c_g_tb.appendChild(this.c_g_tbody);
	return this.c_g_tb;	
}

var GridList=function(date,language){
	this.c_g_div=_create('div');
	this.c_g_tb=_create('table');
	this.c_g_tbody=_create('tbody');
	this.c_g_div.className='wc-scrollable-grid';
	this.c_g_tb.className='wc-time-slots';
	this.c_g_tb.id='wc-time-slots';
	this.c_g_div.style.height=(getWinHeight()-95)+'px';
	
	addEvents(this.c_g_div,'selectstart',function(){return false; });
	this.date=date; 
	this.date.addDays(-date.getDay()); 
	this.week = language.weekArray;
	
		this.c_g_tr_h=_create('tr');
		this.c_g_tr_b=_create('tr');
		
		this.c_g_tr_h_td_time=_create('td');
		this.c_g_tr_h_td_time.style.width='6%';
		this.c_g_tr_h_td_slot=_create('td');
		this.c_g_tr_h_td_slot.colSpan =7;
		
		this.c_g_tr_td_slot_d=_create('div');
		this.c_g_tr_td_slot_d.className='wc-time-slot-wrapper';
		this.c_g_tr_td_slot_div=_create('div');
		this.c_g_tr_td_slot_div.className='wc-time-slots';
		
		for(var i=1;i<=32;i++){
			var slot_div_i=new Slot_div_i();
			if(i%2==0){
				slot_div_i.className='wc-time-slot wc-hour-end';	
			}else{
				slot_div_i.className='wc-time-slot';
			}
			this.c_g_tr_td_slot_div.appendChild(slot_div_i);
		}
		
		this.c_g_tr_b_td_time=_create('td');
		this.c_g_tr_b_td_time.style.width='6%';
		this.c_g_tr_b_td_time.style.backgroundColor='#eee';
		
		for(var i=6;i<=21;i++){
			this.time_l=_create('div');
			if(i>=9&&i<=18){
					this.time_l.className='wc-hour-header wc-business-hours';
			}else{
					this.time_l.className='wc-hour-header wc-business-hours';
			}
			this.time_l_v=_create('div');
			this.time_l_v.style.height='39px';
			
			this.time_l_v.innerHTML=language.timeArray[i-1];
			this.time_am_pm=_create('span');
			this.time_am_pm.className='wc-am-pm';
			this.time_am_pm.innerHTML='AM';
			if(i>12){
				this.time_am_pm.innerHTML='PM';
			}
			this.time_l_v.appendChild(this.time_am_pm);
			this.time_l.appendChild(this.time_l_v);
			this.c_g_tr_b_td_time.appendChild(this.time_l);
		}
		
		this.c_g_tr_b.appendChild(this.c_g_tr_b_td_time);
		
		//当前系统时间
		var currentDate=new Date();
        var me=document.getElementById('week.js').getAttribute('courseinfo');
        var handle_data = eval(me);
	
		
		for(var j=0;j<7;j++){
			this.c_g_tr_b_td_slot=_create('td');
			this.c_g_tr_b_td_slot.className='wc-day-column day-'+j;

			var l_date=addDays(date,j);
			
			this.c_g_tr_b_td_slot.appendChild(new Slot_div_j(l_date,handle_data,j));
			this.c_g_tr_b_td_slot.id=l_date.format("yyyyMMdd")+'_td';
			
			if(currentDate.getFullYear()==l_date.getFullYear()
			 &&currentDate.getMonth()==l_date.getMonth()
			 &&currentDate.getDate()==l_date.getDate()
			 &&currentDate.getDay()==j){
				this.c_g_tr_b_td_slot.className+=' today'; 
			}
			



			this.c_g_tr_b.appendChild(this.c_g_tr_b_td_slot);
		}
		this.c_g_tr_td_slot_d.appendChild(this.c_g_tr_td_slot_div);
		this.c_g_tr_h_td_slot.appendChild(this.c_g_tr_td_slot_d);
		this.c_g_tr_h.appendChild(this.c_g_tr_h_td_time);
		this.c_g_tr_h.appendChild(this.c_g_tr_h_td_slot);
		this.c_g_tbody.appendChild(this.c_g_tr_h);
		this.c_g_tbody.appendChild(this.c_g_tr_b);
	
	this.c_g_tb.appendChild(this.c_g_tbody);
	this.c_g_div.appendChild(this.c_g_tb);


    




	return this.c_g_div;	
}

var color_me=function(coursetime,day,frame,coursename,courseid){
    //alert(value)
			
    //state_obj=false;  
    //down=true;       
    current_date=day;

   // var isdownObj=false;  //是否是按下的对象


    this.event_div=_create('div');
    this.event_time_div=_create('div');
    this.event_content_div=_create('div');
    this.resize_div=_create('div');

    this.event_div.className='wc-cal-event ui-corner-all br4';			   
    this.event_time_div.className='wc-time ui-corner-all br4';
    this.resize_div.className='ui-resizable-handle ui-resizable-s';	


    //m=getOffsetY(event);

    //y=parseInt(getOffsetY(event)/20)*20;
   // t=parseInt(getOffsetY(event)/20)+1;
   // current_obj=getEventObj(event);
   // if(getEventObj(event)==_(day+'_week')){
    //    isdownObj=true;
     //   is_current_obj=true;
   // }
        var start=0;
        var delta=0;
        var strday='abc';
        switch (parseInt(coursetime))
        {
            case 1:  start=8;delta=2;strday = "8:00-10:00";break;
            case 2:  start=10.5;delta=2;strday = "10:30-12:30";break;
            case 3:  start=13.5;delta=2;strday = "13:30-15:30";break;
            case 4:  start=16;delta=2;strday = "16:00-18:00";break;
        }

        var y= ((120*(start-5))/3).toString();
        var height = ((delta*120)/3).toString();//each hour 40
        this.event_div.style.top=y +'px';
        this.event_div.style.height= height+'px';
        var date=new Date(day);
        var d=new Date();

        var ndate=new Date((d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear());
        if(!(date>=ndate)){
            this.event_div.style.backgroundColor ='#aaa';
        }
       coursename_link = '<a href="/student/courseindex/'+courseid+'/">'+coursename+'</a>';

        this.event_div.id=day+''+y+'_event_div';
        this.event_time_div.id=day+''+y+'_event_time';
        this.event_time_div.innerHTML = strday;
        this.event_content_div.id=day+''+y+'_event_content';
        this.event_content_div.innerHTML=coursename_link;
        this.event_div.appendChild(this.event_time_div);
        this.event_div.appendChild(this.event_content_div);
        //addEvents(this.resize_div,'mousedown',function(event){resize_downEvent(day,event); });
        this.event_div.appendChild(this.resize_div);

        frame.appendChild(this.event_div);

}



var Slot_div_i=function(){
    this.slot_div_i=_create('div');

    if (window.XMLHttpRequest&&!window.ActiveXObject) { 
        this.slot_div_i.style.height='19px';	
    }else{
        this.slot_div_i.style.height='19px';
    }

    return this.slot_div_i;
}



var Slot_div_j=function(date,handle_data,j){
	var l_date = date;
	var dateMDY=date.format("MM/dd/yyyy");
	
	this.slot_div_j=_create('div');
	this.slot_div_j.className='wc-day-column-inner';
	this.slot_div_j.style.height='640px';
	this.slot_div_j.id=dateMDY+'_week';
	
    length = handle_data.length
        for (var pos=0;pos<length;pos++){
            for (var timepos=0;timepos<handle_data[pos].coursetime.length;timepos++){
                var date_start = new Date()
                    var date_end = new Date()
                    var compare = new Date()
                    year_s = (handle_data[pos].coursetime[timepos].start_date.year);
                month_s =(handle_data[pos].coursetime[timepos].start_date.month);
                day_s = (handle_data[pos].coursetime[timepos].start_date.day);
                year_e = (handle_data[pos].coursetime[timepos].end_date.year);
                month_e = (handle_data[pos].coursetime[timepos].end_date.month);
                day_e = (handle_data[pos].coursetime[timepos].end_date.day);
                date_start.setFullYear(year_s,month_s,day_s)
                    date_end.setFullYear(year_e,month_e,day_e)
                    compare.setFullYear(l_date.getFullYear(),l_date.getMonth()+1,l_date.getDate())
                    if(compare>=date_start&&compare<=date_end)
                    {
                        var timecourse = handle_data[pos].coursetime[timepos];
                        if (timecourse.dayofweek == j){
                            var dateMDY=date.format("MM/dd/yyyy");
                            color_me(timecourse.timeofday,dateMDY,this.slot_div_j,handle_data[pos].coursename,handle_data[pos].courseid);
                        }

                    }
            }
        }
	//添加事件
	//addEvents(this.slot_div_j,'mousedown',function(event){downEvent(dateMDY,event); });
	//addEvents(this.slot_div_j,'mousemove',function(event){moveEvent(dateMDY,event)});
	//addEvents(this.slot_div_j,'mouseup',function(event){upEvent(dateMDY,event)});
	
	//addEvents(this.slot_div_j,'mouseover',function(event){overEvent(dateMDY,event)});
	//addEvents(this.slot_div_j,'mouseout',function(event){outEvent(dateMDY,event)});

	
	return this.slot_div_j;
}
var Grid_td=function(language,year,month,day,date,ndate,i,j,w,days){
	this.c_g_td=_create('td');
	this.c_g_td.className='CalendarWeekend';
	this.c_g_td.style.verticalAlign='top';
	this.c_g_td.style.textAlign='left';
	
	this.day; 
	
	var g='';
	

	var g="&nbsp;"
	this.c_g_td.id='day_'+day;
	
	this.day=day;
	
	this.c_g_td.innerHTML=g;
	if(ndate.getFullYear()==date.getFullYear()&&ndate.getMonth()==date.getMonth()&&ndate.getDate()==day){
		this.c_g_td.style.background='#9AD5ED'; 
	}
	return this;
}
//下一个周
Next=function(){
	var d=_('date');
	var date=new Date(d.value);
		date.addDays(7);
	gotoWeek(date);
		
}
//上一个周
Prev=function(){
	var d=_('date');
	var date=new Date(d.value);
		date.addDays(-7);
	gotoWeek(date);
}

//跳转到某周
var gotoWeek=function(date){
	
	var lang='english';
	var languageobj=_('hidden_language');
	if(languageobj){ lang=languageobj.value;}
	
	try{
		var cr=new Calendar();
			cr.date=date;
			cr.language=new Language(lang);
			cr.load();

	}catch(e){
		alert(e);	
	}
}

