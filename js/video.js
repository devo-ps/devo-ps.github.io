$(function() {
  // Replace youtube links with an embed
  var width  = 640;
  var height = 480;
  var embed = '<iframe width="'+ width +'" height="'+ height +'" src="https://www.youtube.com/embed/RIsiAluCxU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

  $('.blog a[href*="youtube.com/watch"]').each(function() {
      var that = $(this);
      var video = that.attr('href').match(/(?:v=)([\w\-]+)/g);
      if (video.length) {
          $.each(video, function(i){
              that.replaceWith(embed.replace(/\[vid\]/g, this.replace('v=','')) );
          });
      }
  });

  $('a.preview[href*="youtube.com/watch"]').click(function() {
      var that = $(this);
      var video = that.attr('href').match(/(?:v=)([\w\-]+)/g);

      if (video.length) {
          $.each(video, function(i){
              $('#modal').html(embed.replace(/\[vid\]/g, this.replace('v=','')) );
          });
      }
      $('body').addClass('modal');

      return false;
  });
});
