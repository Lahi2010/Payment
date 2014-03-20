// JavaScript Document

 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
	
   // $(".tab_content").hide();
   // $(".tab_content:first").show();

  /* if in tab mode */
    $(".footer_tab ul.tabs_footer li").click(function() {
		
      $(".footer_tab .tab_content_footer").hide();
      var activeTab_footer = $(this).attr("rel"); 
     // $("#"+activeTab).fadeIn();
	   $("#"+activeTab_footer)
  .css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
	  
	
	  
	  
		
      $(".footer_tab ul.tabs_footer li").removeClass("active_footer");
      $(this).addClass("active_footer");

	  $(".footer_tab .tab_drawer_heading_footer").removeClass("d_active_footer");
	  $(".footer_tab .tab_drawer_heading_footer[rel^='"+activeTab_footer+"']").addClass("d_active_footer");
	  
    });
	/* if in drawer mode */
	$(".footer_tab .tab_drawer_heading_footer").click(function() {
      
      $(".footer_tab .tab_content_footer").hide();
      var d_activeTab_footer = $(this).attr("rel"); 
    //  $("#"+d_activeTab).fadeIn();
	    $("#"+d_activeTab_footer)
  .css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
	  
	  $(".footer_tab .tab_drawer_heading_footer").removeClass("d_active_footer");
      $(this).addClass("d_active_footer");
	  
	  $(".footer_tab ul.tabs_footer li").removeClass("active_footer");
	  $(".footer_tab ul.tabs_footer li[rel^='"+d_activeTab_footer+"']").addClass("active_footer");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('.footer_tab ul.tabs_footer li').last().addClass("tab_last_footer");
	