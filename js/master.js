$(document).ready(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 99) {
      $('#mars_350').addClass('position_fixed_0');
    }

    else {
      $('#mars_350').removeClass('position_fixed_0');
    }
  });
/*
  $(window).scroll(function () {
    if ($(document).scrollTop() > 408.79998779296875) {
      $('#mars_349').addClass('position_fixed');
    }

    else {
      $('#mars_349').removeClass('position_fixed');
    }
  });
*/
/*For Nav Starts*/
  /*Home*/
  $('#mars_356').click(function () {
    $(document).scrollTop(0);
    $(this).addClass('active_1');
    $('#mars_357, #mars_358, #mars_359').removeClass('active_1');
    $('#mars_351, #mars_352, #mars_353, #mars_354').addClass('display');
    $('#mars_351, #mars_352, #mars_353, #mars_354').removeClass('display_none');
    $('#mars_355, #mars_360, #mars_361').removeClass('display');
    $('#mars_355, #mars_360, #mars_361').addClass('display_none');
  });
  /*Categories*/
  $('#mars_357').click(function () {
    $(document).scrollTop(0);
    $(this).addClass('active_1');
    $('#mars_356, #mars_358').removeClass('active_1');
    $('#mars_351, #mars_352, #mars_353, #mars_354, #mars_360, #mars_361').removeClass('display');
    $('#mars_351, #mars_352, #mars_353, #mars_354, #mars_360, #mars_361').addClass('display_none');
    $('#mars_355').addClass('display');
    $('#mars_355').removeClass('display_none');
  });
  /*Contact*/
  $('#mars_358').click(function () {
    $(document).scrollTop(0);
    $(this).addClass('active_1');
    $('#mars_356, #mars_357, #mars_359').removeClass('active_1');
    $('#mars_351, #mars_352, #mars_353, #mars_354, #mars_355, #mars_361').removeClass('display');
    $('#mars_351, #mars_352, #mars_353, #mars_354, #mars_355, #mars_361').addClass('display_none');
    $('#mars_360').addClass('display');
    $('#mars_360').removeClass('display_none');
  });
  /*About*/
  $('#mars_359').click(function () {
    $(document).scrollTop(0);
    $(this).addClass('active_1');
    $('#mars_356, #mars_357, #mars_358').removeClass('active_1');
    $('#mars_351, #mars_352, #mars_353, #mars_354, #mars_355, #mars_360').removeClass('display');
    $('#mars_351, #mars_352, #mars_353, #mars_354, #mars_355, #mars_360').addClass('display_none');
    $('#mars_361').addClass('display');
    $('#mars_361').removeClass('display_none');
  });

/*For Nav Ends*/
/*On Sale switch starts*/
  $('#mars_028').click(function () {
    $(this).addClass('active_1');
    $('#mars_029').removeClass('active_1');
    $('#mars_030').removeClass('active_1');
    $('#mars_032').attr('src', 'images/thumbnails/product1.jpg');
    $('#mars_032').attr('alt', 'Adidas');
    $('#mars_032').attr('color', 'Black');
    $('#mars_033').text('Adidas Runfalcon');
    $('#mars_034').text('$64.70');
    $('#mars_060').text('$77.64');
    $('#mars_108').attr('src', 'images/thumbnails/product2.png');
    $('#mars_108').attr('alt', 'T-LOB Fashion');
    $('#mars_108').attr('color', 'Navy Blue');
    $('#mars_109').text('Money Heist T-shirt');
    $('#mars_110').text('$2.26');
    $('#mars_111').text('$4.53');
    $('#mars_114').attr('src', 'images/thumbnails/product3.jpg');
    $('#mars_114').attr('alt', 'Cut Price');
    $('#mars_114').attr('color', 'Blue/Black');
    $('#mars_115').text('Formal Office Shirt');
    $('#mars_116').text('$5.17');
    $('#mars_117').text('$10.35');
    $('#mars_119').attr('src', 'images/thumbnails/product4.png');
    $('#mars_119').attr('alt', 'No Brand');
    $('#mars_119').attr('color', 'Black');
    $('#mars_120').text('Black Dress Shirt');
    $('#mars_121').text('$3.87');
    $('#mars_122').text('$5.17');

  });
  $('#mars_028').mouseenter(function () {
    $(this).addClass('active_border_1')
  });
  $('#mars_028').mouseleave(function () {
    $(this).removeClass('active_border_1')
  });

  $('#mars_029').click(function () {
    $(this).addClass('active_1');
    $('#mars_028').removeClass('active_1');
    $('#mars_030').removeClass('active_1');
    $('#mars_032').attr('src', 'images/thumbnails/product5.jpg');
    $('#mars_032').attr('alt', 'No Brand');
    $('#mars_032').attr('color', 'MultiColor');
    $('#mars_033').text('Multi Panel Top');
    $('#mars_034').text('$7.75');
    $('#mars_060').text('$10.35');
    $('#mars_108').attr('src', 'images/thumbnails/product6.jpg');
    $('#mars_108').attr('alt', 'No Brand');
    $('#mars_108').attr('color', 'Not Specified');
    $('#mars_109').text('Lawn Embroidered Suit');
    $('#mars_110').text('$12.28');
    $('#mars_111').text('$19.40');
    $('#mars_114').attr('src', 'images/thumbnails/product7.jpg');
    $('#mars_114').attr('alt', 'SMC');
    $('#mars_114').attr('color', 'Blue/White');
    $('#mars_115').text('Trendy Design Scarves');
    $('#mars_116').text('$2.91');
    $('#mars_117').text('$3.23');
    $('#mars_119').attr('src', 'images/thumbnails/product8.jpg');
    $('#mars_119').attr('alt', 'Jacquard');
    $('#mars_119').attr('color', 'Sea-Green');
    $('#mars_120').text('Printed Unstitched Shirt');
    $('#mars_121').text('$3.87');
    $('#mars_122').text('$5.17');
  });
  $('#mars_029').mouseenter(function () {
    $(this).addClass('active_border_1')
  });
  $('#mars_029').mouseleave(function () {
    $(this).removeClass('active_border_1')
  });

  $('#mars_030').click(function () {
    $(this).addClass('active_1');
    $('#mars_028').removeClass('active_1');
    $('#mars_029').removeClass('active_1');
  });
  $('#mars_030').mouseenter(function () {
    $(this).addClass('active_border_1')
  });
  $('#mars_030').mouseleave(function () {
    $(this).removeClass('active_border_1')
  });
/*On Sale switch ends*/


/*For Product thumbnail start*/

  /*For icons starts*/
  $('#mars_133').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_166').addClass('display');
  })
  $('#mars_133').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_166').removeClass('display');
  })
  $('#mars_134').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_167').addClass('display');
  })
  $('#mars_134').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_167').removeClass('display');
  })
  $('#mars_135').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_168').addClass('display');
  })
  $('#mars_135').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_168').removeClass('display');
  })

  $('#mars_172').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_173').addClass('display');
  })
  $('#mars_172').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_173').removeClass('display');
  })
  $('#mars_174').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_175').addClass('display');
  })
  $('#mars_174').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_175').removeClass('display');
  })
  $('#mars_176').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_177').addClass('display');
  })
  $('#mars_176').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_177').removeClass('display');
  })

  $('#mars_181').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_182').addClass('display');
  })
  $('#mars_181').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_182').removeClass('display');
  })
  $('#mars_183').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_184').addClass('display');
  })
  $('#mars_183').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_184').removeClass('display');
  })
  $('#mars_185').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_186').addClass('display');
  })
  $('#mars_185').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_186').removeClass('display');
  })

  $('#mars_190').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_191').addClass('display');
  })
  $('#mars_190').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_191').removeClass('display');
  })
  $('#mars_192').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_193').addClass('display');
  })
  $('#mars_192').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_193').removeClass('display');
  })
  $('#mars_194').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_195').addClass('display');
  })
  $('#mars_194').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_195').removeClass('display');
  })

  $('#mars_199').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_200').addClass('display');
  })
  $('#mars_199').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_200').removeClass('display');
  })
  $('#mars_201').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_202').addClass('display');
  })
  $('#mars_201').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_202').removeClass('display');
  })
  $('#mars_203').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_204').addClass('display');
  })
  $('#mars_203').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_204').removeClass('display');
  })

  $('#mars_208').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_209').addClass('display');
  })
  $('#mars_208').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_209').removeClass('display');
  })
  $('#mars_210').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_211').addClass('display');
  })
  $('#mars_210').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_211').removeClass('display');
  })
  $('#mars_212').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_213').addClass('display');
  })
  $('#mars_212').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_213').removeClass('display');
  })

  $('#mars_217').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_218').addClass('display');
  })
  $('#mars_217').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_218').removeClass('display');
  })
  $('#mars_219').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_220').addClass('display');
  })
  $('#mars_219').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_220').removeClass('display');
  })
  $('#mars_221').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_222').addClass('display');
  })
  $('#mars_221').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_222').removeClass('display');
  })

  $('#mars_226').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_227').addClass('display');
  })
  $('#mars_226').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_227').removeClass('display');
  })
  $('#mars_228').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_229').addClass('display');
  })
  $('#mars_228').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_229').removeClass('display');
  })
  $('#mars_230').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_231').addClass('display');
  })
  $('#mars_230').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_231').removeClass('display');
  })

  $('#mars_235').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_236').addClass('display');
  })
  $('#mars_235').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_236').removeClass('display');
  })
  $('#mars_237').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_238').addClass('display');
  })
  $('#mars_237').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_238').removeClass('display');
  })
  $('#mars_239').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_240').addClass('display');
  })
  $('#mars_239').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_240').removeClass('display');
  })

  $('#mars_244').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_245').addClass('display');
  })
  $('#mars_244').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_245').removeClass('display');
  })
  $('#mars_246').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_247').addClass('display');
  })
  $('#mars_246').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_247').removeClass('display');
  })
  $('#mars_248').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_249').addClass('display');
  })
  $('#mars_248').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_249').removeClass('display');
  })

  $('#mars_258').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_259').addClass('display');
  })
  $('#mars_258').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_259').removeClass('display');
  })
  $('#mars_260').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_261').addClass('display');
  })
  $('#mars_260').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_261').removeClass('display');
  })
  $('#mars_262').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_263').addClass('display');
  })
  $('#mars_262').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_263').removeClass('display');
  })

  $('#mars_272').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_273').addClass('display');
  })
  $('#mars_272').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_273').removeClass('display');
  })
  $('#mars_274').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_275').addClass('display');
  })
  $('#mars_274').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_275').removeClass('display');
  })
  $('#mars_276').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_277').addClass('display');
  })
  $('#mars_276').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_277').removeClass('display');
  })

  $('#mars_660').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_661').addClass('display');
  })
  $('#mars_660').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_661').removeClass('display');
  })
  $('#mars_662').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_663').addClass('display');
  })
  $('#mars_662').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_663').removeClass('display');
  })
  $('#mars_664').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_665').addClass('display');
  })
  $('#mars_664').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_665').removeClass('display');
  })

  $('#mars_666').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_667').addClass('display');
  })
  $('#mars_666').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_667').removeClass('display');
  })
  $('#mars_668').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_669').addClass('display');
  })
  $('#mars_668').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_669').removeClass('display');
  })
  $('#mars_670').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_671').addClass('display');
  })
  $('#mars_670').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_671').removeClass('display');
  })

  $('#mars_672').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_673').addClass('display');
  })
  $('#mars_672').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_673').removeClass('display');
  })
  $('#mars_674').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_675').addClass('display');
  })
  $('#mars_674').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_675').removeClass('display');
  })
  $('#mars_676').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_677').addClass('display');
  })
  $('#mars_676').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_677').removeClass('display');
  })

  $('#mars_678').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_679').addClass('display');
  })
  $('#mars_678').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_679').removeClass('display');
  })
  $('#mars_680').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_681').addClass('display');
  })
  $('#mars_680').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_681').removeClass('display');
  })
  $('#mars_682').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_683').addClass('display');
  })
  $('#mars_682').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_683').removeClass('display');
  })

  $('#mars_684').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_685').addClass('display');
  })
  $('#mars_684').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_685').removeClass('display');
  })
  $('#mars_686').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_687').addClass('display');
  })
  $('#mars_686').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_687').removeClass('display');
  })
  $('#mars_688').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_689').addClass('display');
  })
  $('#mars_688').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_689').removeClass('display');
  })

  $('#mars_690').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_691').addClass('display');
  })
  $('#mars_690').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_691').removeClass('display');
  })
  $('#mars_692').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_693').addClass('display');
  })
  $('#mars_692').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_693').removeClass('display');
  })
  $('#mars_694').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_695').addClass('display');
  })
  $('#mars_694').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_695').removeClass('display');
  })

  $('#mars_696').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_697').addClass('display');
  })
  $('#mars_696').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_697').removeClass('display');
  })
  $('#mars_698').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_699').addClass('display');
  })
  $('#mars_698').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_699').removeClass('display');
  })
  $('#mars_700').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_701').addClass('display');
  })
  $('#mars_700').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_701').removeClass('display');
  })

  $('#mars_702').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_703').addClass('display');
  })
  $('#mars_702').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_703').removeClass('display');
  })
  $('#mars_704').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_705').addClass('display');
  })
  $('#mars_704').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_705').removeClass('display');
  })
  $('#mars_706').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_707').addClass('display');
  })
  $('#mars_706').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_707').removeClass('display');
  })

  $('#mars_708').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_709').addClass('display');
  })
  $('#mars_708').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_709').removeClass('display');
  })
  $('#mars_710').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_711').addClass('display');
  })
  $('#mars_710').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_711').removeClass('display');
  })
  $('#mars_712').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_713').addClass('display');
  })
  $('#mars_712').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_713').removeClass('display');
  })

  $('#mars_714').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_715').addClass('display');
  })
  $('#mars_714').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_715').removeClass('display');
  })
  $('#mars_716').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_717').addClass('display');
  })
  $('#mars_716').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_717').removeClass('display');
  })
  $('#mars_718').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_719').addClass('display');
  })
  $('#mars_718').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_719').removeClass('display');
  })

  $('#mars_720').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_721').addClass('display');
  })
  $('#mars_720').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_721').removeClass('display');
  })
  $('#mars_722').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_723').addClass('display');
  })
  $('#mars_722').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_723').removeClass('display');
  })
  $('#mars_724').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_725').addClass('display');
  })
  $('#mars_724').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_725').removeClass('display');
  })

  $('#mars_726').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_727').addClass('display');
  })
  $('#mars_726').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_727').removeClass('display');
  })
  $('#mars_728').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_729').addClass('display');
  })
  $('#mars_728').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_729').removeClass('display');
  })
  $('#mars_730').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_731').addClass('display');
  })
  $('#mars_730').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_731').removeClass('display');
  })

  $('#mars_732').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_733').addClass('display');
  })
  $('#mars_732').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_733').removeClass('display');
  })
  $('#mars_734').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_735').addClass('display');
  })
  $('#mars_734').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_735').removeClass('display');
  })
  $('#mars_736').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_737').addClass('display');
  })
  $('#mars_736').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_737').removeClass('display');
  })

  $('#mars_738').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_739').addClass('display');
  })
  $('#mars_738').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_739').removeClass('display');
  })
  $('#mars_740').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_741').addClass('display');
  })
  $('#mars_740').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_741').removeClass('display');
  })
  $('#mars_742').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_743').addClass('display');
  })
  $('#mars_742').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_743').removeClass('display');
  })

  $('#mars_744').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_745').addClass('display');
  })
  $('#mars_744').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_745').removeClass('display');
  })
  $('#mars_746').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_747').addClass('display');
  })
  $('#mars_746').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_747').removeClass('display');
  })
  $('#mars_748').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_749').addClass('display');
  })
  $('#mars_748').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_749').removeClass('display');
  })

  $('#mars_750').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_751').addClass('display');
  })
  $('#mars_750').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_751').removeClass('display');
  })
  $('#mars_752').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_753').addClass('display');
  })
  $('#mars_752').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_753').removeClass('display');
  })
  $('#mars_754').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_755').addClass('display');
  })
  $('#mars_754').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_755').removeClass('display');
  })

  $('#mars_756').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_757').addClass('display');
  })
  $('#mars_756').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_757').removeClass('display');
  })
  $('#mars_758').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_759').addClass('display');
  })
  $('#mars_758').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_759').removeClass('display');
  })
  $('#mars_760').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_761').addClass('display');
  })
  $('#mars_760').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_761').removeClass('display');
  })

  $('#mars_762').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_763').addClass('display');
  })
  $('#mars_762').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_763').removeClass('display');
  })
  $('#mars_764').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_765').addClass('display');
  })
  $('#mars_764').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_765').removeClass('display');
  })
  $('#mars_766').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_767').addClass('display');
  })
  $('#mars_766').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_767').removeClass('display');
  })

  $('#mars_768').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_769').addClass('display');
  })
  $('#mars_768').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_769').removeClass('display');
  })
  $('#mars_770').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_771').addClass('display');
  })
  $('#mars_770').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_771').removeClass('display');
  })
  $('#mars_772').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_773').addClass('display');
  })
  $('#mars_772').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_773').removeClass('display');
  })

  $('#mars_774').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_775').addClass('display');
  })
  $('#mars_774').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_775').removeClass('display');
  })
  $('#mars_776').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_777').addClass('display');
  })
  $('#mars_776').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_777').removeClass('display');
  })
  $('#mars_778').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_779').addClass('display');
  })
  $('#mars_778').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_779').removeClass('display');
  })

  $('#mars_780').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_781').addClass('display');
  })
  $('#mars_780').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_781').removeClass('display');
  })
  $('#mars_782').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_783').addClass('display');
  })
  $('#mars_782').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_783').removeClass('display');
  })
  $('#mars_784').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_785').addClass('display');
  })
  $('#mars_784').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_785').removeClass('display');
  })

  $('#mars_786').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_787').addClass('display');
  })
  $('#mars_786').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_787').removeClass('display');
  })
  $('#mars_788').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_789').addClass('display');
  })
  $('#mars_788').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_789').removeClass('display');
  })
  $('#mars_790').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_791').addClass('display');
  })
  $('#mars_790').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_791').removeClass('display');
  })

  $('#mars_792').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_793').addClass('display');
  })
  $('#mars_792').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_793').removeClass('display');
  })
  $('#mars_794').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_795').addClass('display');
  })
  $('#mars_794').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_795').removeClass('display');
  })
  $('#mars_796').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_797').addClass('display');
  })
  $('#mars_796').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_797').removeClass('display');
  })

  $('#mars_798').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_799').addClass('display');
  })
  $('#mars_798').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_799').removeClass('display');
  })
  $('#mars_800').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_801').addClass('display');
  })
  $('#mars_800').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_801').removeClass('display');
  })
  $('#mars_802').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_803').addClass('display');
  })
  $('#mars_802').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_803').removeClass('display');
  })

  $('#mars_804').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_805').addClass('display');
  })
  $('#mars_804').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_805').removeClass('display');
  })
  $('#mars_806').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_807').addClass('display');
  })
  $('#mars_806').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_807').removeClass('display');
  })
  $('#mars_808').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_809').addClass('display');
  })
  $('#mars_808').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_809').removeClass('display');
  })

  $('#mars_810').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_811').addClass('display');
  })
  $('#mars_810').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_811').removeClass('display');
  })
  $('#mars_812').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_813').addClass('display');
  })
  $('#mars_812').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_813').removeClass('display');
  })
  $('#mars_814').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_815').addClass('display');
  })
  $('#mars_814').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_815').removeClass('display');
  })

  $('#mars_816').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_817').addClass('display');
  })
  $('#mars_816').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_817').removeClass('display');
  })
  $('#mars_818').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_819').addClass('display');
  })
  $('#mars_818').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_819').removeClass('display');
  })
  $('#mars_820').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_821').addClass('display');
  })
  $('#mars_820').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_821').removeClass('display');
  })

  $('#mars_822').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_823').addClass('display');
  })
  $('#mars_822').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_823').removeClass('display');
  })
  $('#mars_824').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_825').addClass('display');
  })
  $('#mars_824').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_825').removeClass('display');
  })
  $('#mars_826').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_827').addClass('display');
  })
  $('#mars_826').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_827').removeClass('display');
  })

  $('#mars_828').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_829').addClass('display');
  })
  $('#mars_828').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_829').removeClass('display');
  })
  $('#mars_830').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_831').addClass('display');
  })
  $('#mars_830').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_831').removeClass('display');
  })
  $('#mars_832').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_833').addClass('display');
  })
  $('#mars_832').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_833').removeClass('display');
  })

  $('#mars_834').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_835').addClass('display');
  })
  $('#mars_834').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_835').removeClass('display');
  })
  $('#mars_836').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_837').addClass('display');
  })
  $('#mars_836').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_837').removeClass('display');
  })
  $('#mars_838').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_839').addClass('display');
  })
  $('#mars_838').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_839').removeClass('display');
  })

  $('#mars_840').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_841').addClass('display');
  })
  $('#mars_840').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_841').removeClass('display');
  })
  $('#mars_842').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_843').addClass('display');
  })
  $('#mars_842').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_843').removeClass('display');
  })
  $('#mars_844').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_845').addClass('display');
  })
  $('#mars_844').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_845').removeClass('display');
  })

  $('#mars_846').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_847').addClass('display');
  })
  $('#mars_846').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_847').removeClass('display');
  })
  $('#mars_848').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_849').addClass('display');
  })
  $('#mars_848').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_849').removeClass('display');
  })
  $('#mars_850').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_851').addClass('display');
  })
  $('#mars_850').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_851').removeClass('display');
  })

  $('#mars_852').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_853').addClass('display');
  })
  $('#mars_852').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_853').removeClass('display');
  })
  $('#mars_854').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_855').addClass('display');
  })
  $('#mars_854').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_855').removeClass('display');
  })
  $('#mars_856').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_857').addClass('display');
  })
  $('#mars_856').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_857').removeClass('display');
  })

  $('#mars_858').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_859').addClass('display');
  })
  $('#mars_858').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_859').removeClass('display');
  })
  $('#mars_860').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_861').addClass('display');
  })
  $('#mars_860').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_861').removeClass('display');
  })
  $('#mars_862').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_863').addClass('display');
  })
  $('#mars_862').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_863').removeClass('display');
  })

  $('#mars_864').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_865').addClass('display');
  })
  $('#mars_864').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_865').removeClass('display');
  })
  $('#mars_866').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_867').addClass('display');
  })
  $('#mars_866').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_867').removeClass('display');
  })
  $('#mars_868').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_869').addClass('display');
  })
  $('#mars_868').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_869').removeClass('display');
  })

  $('#mars_870').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_871').addClass('display');
  })
  $('#mars_870').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_871').removeClass('display');
  })
  $('#mars_872').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_873').addClass('display');
  })
  $('#mars_872').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_873').removeClass('display');
  })
  $('#mars_874').mouseenter(function () {
    $(this).addClass('active_6');
    $('#mars_875').addClass('display');
  })
  $('#mars_874').mouseleave(function () {
    $(this).removeClass('active_6');
    $('#mars_875').removeClass('display');
  })

  /*For icons ends*/


  /*Image Zoom starts*/
  $('.mars_026').mouseenter(function () {
    $(this).addClass('zoom');
  });
  $('.mars_026').mouseleave(function () {
    $(this).removeClass('zoom');
  });
  /*Image Zoom ends*/

  $('#mars_031').mouseenter(function () {
    $('#mars_033').addClass('active_1');
    $('#mars_034').addClass('active_2');
    $('#mars_163, #mars_164, #mars_165').addClass('visible');
  });
  $('#mars_031').mouseleave(function () {
    $('#mars_034').removeClass('active_2');
    $('#mars_033').removeClass('active_1');
    $('#mars_163, #mars_164, #mars_165').removeClass('visible');
  });
  $('#mars_031, #134').click(function () {
    $('#mars_051').attr("src", $('#mars_032').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_033').text());
    $('#mars_055').text($('#mars_032').attr('alt'));
    $('#mars_057').text($('#mars_034').text());
    $('#mars_059').text($('#mars_060').text());
    $('#mars_061').text($('#mars_032').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_033').text() + " | Mars");
  });

  $('#mars_050').click(function () {
    $('#mars_049').removeClass('display');
    $('#mars_').removeClass('display_none');
    $('body').removeClass('disable_scroll')
    $('#mars_100').text($('#mars_100').attr('title'));
  });

  $('#mars_126').mouseenter(function () {
    $('#mars_128').addClass('active_1');
    $('#mars_129').addClass('active_2');
    $('#mars_196, #mars_197, #mars_198').addClass('visible');
  });
  $('#mars_126').mouseleave(function () {
    $('#mars_128').removeClass('active_1');
    $('#mars_129').removeClass('active_2');
    $('#mars_196, #mars_197, #mars_198').removeClass('visible');
  });
  $('#mars_126').click(function () {
    $('#mars_051').attr("src", $('#mars_127').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_128').text());
    $('#mars_055').text($('#mars_127').attr('alt'));
    $('#mars_057').text($('#mars_129').text());
    $('#mars_059').text($('#mars_130').text());
    $('#mars_061').text($('#mars_127').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_128').text() + " | Mars");
  });


  $('#mars_153').mouseenter(function () {
    $('#mars_155').addClass('active_1');
    $('#mars_156').addClass('active_2');
    $('#mars_232, #mars_233, #mars_234').addClass('visible');
  });
  $('#mars_153').mouseleave(function () {
    $('#mars_155').removeClass('active_1');
    $('#mars_156').removeClass('active_2');
    $('#mars_232, #mars_233, #mars_234').removeClass('visible');
  });
  $('#mars_153').click(function () {
    $('#mars_051').attr("src", $('#mars_154').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_155').text());
    $('#mars_055').text($('#mars_154').attr('alt'));
    $('#mars_057').text($('#mars_156').text());
    $('#mars_059').text($('#mars_157').text());
    $('#mars_061').text($('#mars_154').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_100').text($('#mars_155').text() + " | Mars");
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_107').mouseenter(function () {
    $('#mars_109').addClass('active_1');
    $('#mars_110').addClass('active_2');
    $('#mars_169, #mars_170, #mars_171').addClass('visible');
  });
  $('#mars_107').mouseleave(function () {
    $('#mars_110').removeClass('active_2');
    $('#mars_109').removeClass('active_1');
    $('#mars_169, #mars_170, #mars_171').removeClass('visible');
  });
  $('#mars_107').click(function () {
    $('#mars_051').attr("src", $('#mars_108').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_109').text());
    $('#mars_055').text($('#mars_108').attr('alt'));
    $('#mars_057').text($('#mars_110').text());
    $('#mars_059').text($('#mars_111').text());
    $('#mars_061').text($('#mars_108').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_109').text() + " | Mars");
  });

  $('#mars_138').mouseenter(function () {
    $('#mars_140').addClass('active_1');
    $('#mars_141').addClass('active_2');
    $('#mars_205, #mars_206, #mars_207').addClass('visible');
  });
  $('#mars_138').mouseleave(function () {
    $('#mars_141').removeClass('active_2');
    $('#mars_140').removeClass('active_1');
    $('#mars_205, #mars_206, #mars_207').removeClass('visible');
  });
  $('#mars_138').click(function () {
    $('#mars_051').attr("src", $('#mars_139').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_140').text());
    $('#mars_055').text($('#mars_139').attr('alt'));
    $('#mars_057').text($('#mars_141').text());
    $('#mars_059').text($('#mars_142').text());
    $('#mars_061').text($('#mars_139').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_140').text() + " | Mars");
  });

  $('#mars_158').mouseenter(function () {
    $('#mars_160').addClass('active_1');
    $('#mars_161').addClass('active_2');
    $('#mars_241, #mars_242, #mars_243').addClass('visible');
  });
  $('#mars_158').mouseleave(function () {
    $('#mars_161').removeClass('active_2');
    $('#mars_160').removeClass('active_1');
    $('#mars_241, #mars_242, #mars_243').removeClass('visible');
  });
  $('#mars_158').click(function () {
    $('#mars_051').attr("src", $('#mars_159').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_160').text());
    $('#mars_055').text($('#mars_159').attr('alt'));
    $('#mars_057').text($('#mars_161').text());
    $('#mars_059').text($('#mars_162').text());
    $('#mars_061').text($('#mars_159').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_100').text($('#mars_160').text() + " | Mars");
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_113').mouseenter(function () {
    $('#mars_115').addClass('active_1');
    $('#mars_116').addClass('active_2');
    $('#mars_178, #mars_179, #mars_180').addClass('visible');
  });
  $('#mars_113').mouseleave(function () {
    $('#mars_115').removeClass('active_1');
    $('#mars_116').removeClass('active_2');
    $('#mars_178, #mars_179, #mars_180').removeClass('visible');
  });
  $('#mars_113').click(function () {
    $('#mars_051').attr("src", $('#mars_114').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_115').text());
    $('#mars_055').text($('#mars_114').attr('alt'));
    $('#mars_057').text($('#mars_116').text());
    $('#mars_059').text($('#mars_117').text());
    $('#mars_061').text($('#mars_114').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_115').text() + " | Mars");
  });

  $('#mars_143').mouseenter(function () {
    $('#mars_145').addClass('active_1');
    $('#mars_146').addClass('active_2');
    $('#mars_214, #mars_215, #mars_216').addClass('visible');
  });
  $('#mars_143').mouseleave(function () {
    $('#mars_145').removeClass('active_1');
    $('#mars_146').removeClass('active_2');
    $('#mars_214, #mars_215, #mars_216').removeClass('visible');
  });
  $('#mars_143').click(function () {
    $('#mars_051').attr("src", $('#mars_144').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_145').text());
    $('#mars_055').text($('#mars_144').attr('alt'));
    $('#mars_057').text($('#mars_146').text());
    $('#mars_059').text($('#mars_147').text());
    $('#mars_061').text($('#mars_144').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_100').text($('#mars_145').text() + " | Mars");
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_250').mouseenter(function () {
    $('#mars_252').addClass('active_1');
    $('#mars_253').addClass('active_2');
    $('#mars_255, #mars_256, #mars_257').addClass('visible');
  });
  $('#mars_250').mouseleave(function () {
    $('#mars_252').removeClass('active_1');
    $('#mars_253').removeClass('active_2');
    $('#mars_255, #mars_256, #mars_257').removeClass('visible');
  });
  $('#mars_250').click(function () {
    $('#mars_051').attr("src", $('#mars_251').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_252').text());
    $('#mars_055').text($('#mars_251').attr('alt'));
    $('#mars_057').text($('#mars_253').text());
    $('#mars_059').text($('#mars_254').text());
    $('#mars_061').text($('#mars_251').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_252').text() + " | Mars");
  });

  $('#mars_118').mouseenter(function () {
    $('#mars_120').addClass('active_1');
    $('#mars_121').addClass('active_2');
    $('#mars_187, #mars_188, #mars_189').addClass('visible');
  });
  $('#mars_118').mouseleave(function () {
    $('#mars_121').removeClass('active_2');
    $('#mars_120').removeClass('active_1');
    $('#mars_187, #mars_188, #mars_189').removeClass('visible');
  });
  $('#mars_118').click(function () {
    $('#mars_051').attr("src", $('#mars_119').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_120').text());
    $('#mars_055').text($('#mars_119').attr('alt'));
    $('#mars_057').text($('#mars_121').text());
    $('#mars_059').text($('#mars_122').text());
    $('#mars_061').text($('#mars_119').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
    $('#mars_100').text($('#mars_120').text() + " | Mars");
  });

  $('#mars_148').mouseenter(function () {
    $('#mars_150').addClass('active_1');
    $('#mars_151').addClass('active_2');
    $('#mars_223, #mars_224, #mars_225').addClass('visible');
  });
  $('#mars_148').mouseleave(function () {
    $('#mars_151').removeClass('active_2');
    $('#mars_150').removeClass('active_1');
    $('#mars_223, #mars_224, #mars_225').removeClass('visible');
  });
  $('#mars_148').click(function () {
    $('#mars_051').attr("src", $('#mars_149').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_150').text());
    $('#mars_055').text($('#mars_149').attr('alt'));
    $('#mars_057').text($('#mars_151').text());
    $('#mars_059').text($('#mars_152').text());
    $('#mars_061').text($('#mars_149').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_100').text($('#mars_150').text() + " | Mars");
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_264').mouseenter(function () {
    $('#mars_266').addClass('active_1');
    $('#mars_267').addClass('active_2');
    $('#mars_269, #mars_270, #mars_271').addClass('visible');
  });
  $('#mars_264').mouseleave(function () {
    $('#mars_267').removeClass('active_2');
    $('#mars_266').removeClass('active_1');
    $('#mars_269, #mars_270, #mars_271').removeClass('visible');
  });
  $('#mars_264').click(function () {
    $('#mars_051').attr("src", $('#mars_265').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_266').text());
    $('#mars_055').text($('#mars_265').attr('alt'));
    $('#mars_057').text($('#mars_267').text());
    $('#mars_059').text($('#mars_268').text());
    $('#mars_061').text($('#mars_265').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_100').text($('#mars_266').text() + " | Mars");
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_371').mouseenter(function () {
    $('#mars_401').addClass('active_1');
    $('#mars_395').addClass('active_2');
    $('#mars_397, #mars_398, #mars_399').addClass('visible');
  });
  $('#mars_371').mouseleave(function () {
    $('#mars_401').removeClass('active_1');
    $('#mars_395').removeClass('active_2');
    $('#mars_397, #mars_398, #mars_399').removeClass('visible');
  });
  $('#mars_371').click(function () {
    $('#mars_051').attr("src", $('#mars_400').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_401').text());
    $('#mars_055').text($('#mars_400').attr('alt'));
    $('#mars_057').text($('#mars_395').text());
    $('#mars_059').text($('#mars_396').text());
    $('#mars_061').text($('#mars_400').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_100').text($('#mars_401').text() + " | Mars");
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_372').mouseenter(function () {
    $('#mars_402').addClass('active_1');
    $('#mars_403').addClass('active_2');
    $('#mars_404, #mars_405, #mars_406').addClass('visible');
  });
  $('#mars_372').mouseleave(function () {
    $('#mars_402').removeClass('active_1');
    $('#mars_403').removeClass('active_2');
    $('#mars_404, #mars_405, #mars_406').removeClass('visible');
  });
  $('#mars_372').click(function () {
    $('#mars_051').attr("src", $('#mars_407').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_402').text());
    $('#mars_055').text($('#mars_407').attr('alt'));
    $('#mars_057').text($('#mars_403').text());
    $('#mars_059').text($('#mars_408').text());
    $('#mars_061').text($('#mars_407').attr('color'));
    $('#mars_100').text($('#mars_402').text() + " | Mars");
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_373').mouseenter(function () {
    $('#mars_409').addClass('active_1');
    $('#mars_410').addClass('active_2');
    $('#mars_413, #mars_414, #mars_415').addClass('visible');
  });
  $('#mars_373').mouseleave(function () {
    $('#mars_409').removeClass('active_1');
    $('#mars_410').removeClass('active_2');
    $('#mars_413, #mars_414, #mars_415').removeClass('visible');
  });
  $('#mars_373').click(function () {
    $('#mars_051').attr("src", $('#mars_412').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_409').text());
    $('#mars_055').text($('#mars_412').attr('alt'));
    $('#mars_057').text($('#mars_410').text());
    $('#mars_059').text($('#mars_411').text());
    $('#mars_061').text($('#mars_412').attr('color'));
    $('#mars_100').text($('#mars_409').text() + " | Mars");
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_374').mouseenter(function () {
    $('#mars_416').addClass('active_1');
    $('#mars_417').addClass('active_2');
    $('#mars_420, #mars_421, #mars_422').addClass('visible');
  });
  $('#mars_374').mouseleave(function () {
    $('#mars_416').removeClass('active_1');
    $('#mars_417').removeClass('active_2');
    $('#mars_420, #mars_421, #mars_422').removeClass('visible');
  });
  $('#mars_374').click(function () {
    $('#mars_051').attr("src", $('#mars_419').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_416').text());
    $('#mars_055').text($('#mars_419').attr('alt'));
    $('#mars_057').text($('#mars_417').text());
    $('#mars_059').text($('#mars_418').text());
    $('#mars_061').text($('#mars_419').attr('color'));
    $('#mars_100').text($('#mars_416').text() + " | Mars");
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_375').mouseenter(function () {
    $('#mars_423').addClass('active_1');
    $('#mars_424').addClass('active_2');
    $('#mars_427, #mars_428, #mars_429').addClass('visible');
  });
  $('#mars_375').mouseleave(function () {
    $('#mars_423').removeClass('active_1');
    $('#mars_424').removeClass('active_2');
    $('#mars_427, #mars_428, #mars_429').removeClass('visible');
  });
  $('#mars_375').click(function () {
    $('#mars_051').attr("src", $('#mars_426').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_423').text());
    $('#mars_055').text($('#mars_426').attr('alt'));
    $('#mars_057').text($('#mars_424').text());
    $('#mars_059').text($('#mars_425').text());
    $('#mars_061').text($('#mars_426').attr('color'));
    $('#mars_100').text($('#mars_423').text() + " | Mars");
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_376').mouseenter(function () {
    $('#mars_430').addClass('active_1');
    $('#mars_431').addClass('active_2');
    $('#mars_435, #mars_436, #mars_437').addClass('visible');
  });
  $('#mars_376').mouseleave(function () {
    $('#mars_430').removeClass('active_1');
    $('#mars_431').removeClass('active_2');
    $('#mars_435, #mars_436, #mars_437').removeClass('visible');
  });
  $('#mars_376').click(function () {
    $('#mars_051').attr("src", $('#mars_434').attr('src'));
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_430').text());
    $('#mars_055').text($('#mars_434').attr('alt'));
    $('#mars_057').text($('#mars_431').text());
    $('#mars_059').text($('#mars_432').text());
    $('#mars_061').text($('#mars_434').attr('color'));
    $('#mars_100').text($('#mars_430').text() + " | Mars");
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_377').mouseenter(function () {
    $('#mars_438').addClass('active_1');
    $('#mars_439').addClass('active_2');
    $('#mars_442, #mars_443, #mars_444').addClass('visible');
  });
  $('#mars_377').mouseleave(function () {
    $('#mars_438').removeClass('active_1');
    $('#mars_439').removeClass('active_2');
    $('#mars_442, #mars_443, #mars_444').removeClass('visible');
  });
  $('#mars_377').click(function () {
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_438').text());
    $('#mars_100').text($('#mars_438').text() + " | Mars");
    $('#mars_057').text($('#mars_439').text());
    $('#mars_059').text($('#mars_440').text());
    $('#mars_051').attr("src", $('#mars_441').attr('src'));
    $('#mars_055').text($('#mars_441').attr('alt'));
    $('#mars_061').text($('#mars_441').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_378').mouseenter(function () {
    $('#mars_445').addClass('active_1');
    $('#mars_439').addClass('active_2');
    $('#mars_449, #mars_450, #mars_451').addClass('visible');
  });
  $('#mars_378').mouseleave(function () {
    $('#mars_445').removeClass('active_1');
    $('#mars_439').removeClass('active_2');
    $('#mars_449, #mars_450, #mars_451').removeClass('visible');
  });
  $('#mars_378').click(function () {
    $('body').addClass('disable_scroll')
    $('#mars_053').text($('#mars_445').text());
    $('#mars_100').text($('#mars_445').text() + " | Mars");
    $('#mars_057').text($('#mars_446').text());
    $('#mars_059').text($('#mars_447').text());
    $('#mars_051').attr("src", $('#mars_448').attr('src'));
    $('#mars_055').text($('#mars_448').attr('alt'));
    $('#mars_061').text($('#mars_448').attr('color'));
    $('#mars_094').text($('#mars_053').text());
    $('#mars_').addClass('display_none');
    $('#mars_049').addClass('display');
  });

  $('#mars_379').mouseenter(function () {
    $('#mars_452').addClass('active_1');
    $('#mars_453').addClass('active_2');
    $('#mars_456, #mars_457, #mars_458').addClass('visible');
  });
  $('#mars_379').mouseleave(function () {
    $('#mars_452').removeClass('active_1');
    $('#mars_453').removeClass('active_2');
    $('#mars_456, #mars_457, #mars_458').removeClass('visible');
  });
  $('#mars_379').click(function () {
    $('#mars_053').text($('#mars_452').text());
    $('#mars_100').text($('#mars_452').text() + " | Mars");
    $('#mars_057').text($('#mars_453').text());
    $('#mars_059').text($('#mars_454').text());
    $('#mars_051').attr("src", $('#mars_455').attr('src'));
    $('#mars_055').text($('#mars_455').attr('alt'));
    $('#mars_061').text($('#mars_455').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_380').mouseenter(function () {
    $('#mars_459').addClass('active_1');
    $('#mars_460').addClass('active_2');
    $('#mars_463, #mars_464, #mars_465').addClass('visible');
  });
  $('#mars_380').mouseleave(function () {
    $('#mars_459').removeClass('active_1');
    $('#mars_460').removeClass('active_2');
    $('#mars_463, #mars_464, #mars_465').removeClass('visible');
  });
  $('#mars_380').click(function () {
    $('#mars_053').text($('#mars_459').text());
    $('#mars_100').text($('#mars_459').text() + " | Mars");
    $('#mars_057').text($('#mars_460').text());
    $('#mars_059').text($('#mars_461').text());
    $('#mars_051').attr("src", $('#mars_462').attr('src'));
    $('#mars_055').text($('#mars_462').attr('alt'));
    $('#mars_061').text($('#mars_462').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_381').mouseenter(function () {
    $('#mars_466').addClass('active_1');
    $('#mars_460').addClass('active_2');
    $('#mars_470, #mars_471, #mars_472').addClass('visible');
  });
  $('#mars_381').mouseleave(function () {
    $('#mars_466').removeClass('active_1');
    $('#mars_460').removeClass('active_2');
    $('#mars_470, #mars_471, #mars_472').removeClass('visible');
  });
  $('#mars_381').click(function () {
    $('#mars_053').text($('#mars_466').text());
    $('#mars_100').text($('#mars_466').text() + " | Mars");
    $('#mars_057').text($('#mars_467').text());
    $('#mars_059').text($('#mars_468').text());
    $('#mars_051').attr("src", $('#mars_469').attr('src'));
    $('#mars_055').text($('#mars_469').attr('alt'));
    $('#mars_061').text($('#mars_469').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_382').mouseenter(function () {
    $('#mars_473').addClass('active_1');
    $('#mars_460').addClass('active_2');
    $('#mars_477, #mars_478, #mars_479').addClass('visible');
  });
  $('#mars_382').mouseleave(function () {
    $('#mars_473').removeClass('active_1');
    $('#mars_460').removeClass('active_2');
    $('#mars_477, #mars_478, #mars_479').removeClass('visible');
  });
  $('#mars_382').click(function () {
    $('#mars_053').text($('#mars_473').text());
    $('#mars_100').text($('#mars_473').text() + " | Mars");
    $('#mars_057').text($('#mars_474').text());
    $('#mars_059').text($('#mars_475').text());
    $('#mars_051').attr("src", $('#mars_476').attr('src'));
    $('#mars_055').text($('#mars_476').attr('alt'));
    $('#mars_061').text($('#mars_476').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_383').mouseenter(function () {
    $('#mars_480').addClass('active_1');
    $('#mars_481').addClass('active_2');
    $('#mars_484, #mars_485, #mars_486').addClass('visible');
  });
  $('#mars_383').mouseleave(function () {
    $('#mars_480').removeClass('active_1');
    $('#mars_481').removeClass('active_2');
    $('#mars_484, #mars_485, #mars_486').removeClass('visible');
  });
  $('#mars_383').click(function () {
    $('#mars_053').text($('#mars_480').text());
    $('#mars_100').text($('#mars_480').text() + " | Mars");
    $('#mars_057').text($('#mars_481').text());
    $('#mars_059').text($('#mars_482').text());
    $('#mars_051').attr("src", $('#mars_483').attr('src'));
    $('#mars_055').text($('#mars_483').attr('alt'));
    $('#mars_061').text($('#mars_483').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_384').mouseenter(function () {
    $('#mars_487').addClass('active_1');
    $('#mars_488').addClass('active_2');
    $('#mars_491, #mars_492, #mars_493').addClass('visible');
  });
  $('#mars_384').mouseleave(function () {
    $('#mars_487').removeClass('active_1');
    $('#mars_488').removeClass('active_2');
    $('#mars_491, #mars_492, #mars_493').removeClass('visible');
  });
  $('#mars_384').click(function () {
    $('#mars_053').text($('#mars_487').text());
    $('#mars_100').text($('#mars_487').text() + " | Mars");
    $('#mars_057').text($('#mars_488').text());
    $('#mars_059').text($('#mars_489').text());
    $('#mars_051').attr("src", $('#mars_490').attr('src'));
    $('#mars_055').text($('#mars_490').attr('alt'));
    $('#mars_061').text($('#mars_490').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_385').mouseenter(function () {
    $('#mars_494').addClass('active_1');
    $('#mars_495').addClass('active_2');
    $('#mars_498, #mars_499, #mars_500').addClass('visible');
  });
  $('#mars_385').mouseleave(function () {
    $('#mars_494').removeClass('active_1');
    $('#mars_495').removeClass('active_2');
    $('#mars_498, #mars_499, #mars_500').removeClass('visible');
  });
  $('#mars_385').click(function () {
    $('#mars_053').text($('#mars_494').text());
    $('#mars_100').text($('#mars_494').text() + " | Mars");
    $('#mars_057').text($('#mars_495').text());
    $('#mars_059').text($('#mars_496').text());
    $('#mars_051').attr("src", $('#mars_497').attr('src'));
    $('#mars_055').text($('#mars_497').attr('alt'));
    $('#mars_061').text($('#mars_497').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_386').mouseenter(function () {
    $('#mars_501').addClass('active_1');
    $('#mars_502').addClass('active_2');
    $('#mars_505, #mars_506, #mars_507').addClass('visible');
  });
  $('#mars_386').mouseleave(function () {
    $('#mars_501').removeClass('active_1');
    $('#mars_502').removeClass('active_2');
    $('#mars_505, #mars_506, #mars_507').removeClass('visible');
  });
  $('#mars_386').click(function () {
    $('#mars_053').text($('#mars_501').text());
    $('#mars_100').text($('#mars_501').text() + " | Mars");
    $('#mars_057').text($('#mars_502').text());
    $('#mars_059').text($('#mars_503').text());
    $('#mars_051').attr("src", $('#mars_504').attr('src'));
    $('#mars_055').text($('#mars_504').attr('alt'));
    $('#mars_061').text($('#mars_504').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_387').mouseenter(function () {
    $('#mars_508').addClass('active_1');
    $('#mars_509').addClass('active_2');
    $('#mars_512, #mars_513, #mars_514').addClass('visible');
  });
  $('#mars_387').mouseleave(function () {
    $('#mars_508').removeClass('active_1');
    $('#mars_509').removeClass('active_2');
    $('#mars_512, #mars_513, #mars_514').removeClass('visible');
  });
  $('#mars_387').click(function () {
    $('#mars_053').text($('#mars_508').text());
    $('#mars_100').text($('#mars_508').text() + " | Mars");
    $('#mars_057').text($('#mars_509').text());
    $('#mars_059').text($('#mars_510').text());
    $('#mars_051').attr("src", $('#mars_511').attr('src'));
    $('#mars_055').text($('#mars_511').attr('alt'));
    $('#mars_061').text($('#mars_511').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_388').mouseenter(function () {
    $('#mars_515').addClass('active_1');
    $('#mars_16').addClass('active_2');
    $('#mars_519, #mars_520, #mars_521').addClass('visible');
  });
  $('#mars_388').mouseleave(function () {
    $('#mars_515').removeClass('active_1');
    $('#mars_16').removeClass('active_2');
    $('#mars_519, #mars_520, #mars_521').removeClass('visible');
  });
  $('#mars_388').click(function () {
    $('#mars_053').text($('#mars_515').text());
    $('#mars_100').text($('#mars_515').text() + " | Mars");
    $('#mars_057').text($('#mars_516').text());
    $('#mars_059').text($('#mars_517').text());
    $('#mars_051').attr("src", $('#mars_518').attr('src'));
    $('#mars_055').text($('#mars_518').attr('alt'));
    $('#mars_061').text($('#mars_518').attr('color'));
    $('#mars_').addClass('display_none');
    $('#mars_094').text($('#mars_053').text());
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
  });

  $('#mars_389').mouseenter(function () {
    $('#mars_522').addClass('active_1');
    $('#mars_523').addClass('active_2');
    $('#mars_526, #mars_527, #mars_528').addClass('visible');
  });
  $('#mars_389').mouseleave(function () {
    $('#mars_522').removeClass('active_1');
    $('#mars_523').removeClass('active_2');
    $('#mars_526, #mars_527, #mars_528').removeClass('visible');
  });
  $('#mars_389').click(function () {
    $('#mars_053').text($('#mars_522').text());
    $('#mars_100').text($('#mars_522').text() + " | Mars");
    $('#mars_057').text($('#mars_523').text());
    $('#mars_059').text($('#mars_524').text());
    $('#mars_051').attr("src", $('#mars_525').attr('src'));
    $('#mars_055').text($('#mars_525').attr('alt'));
    $('#mars_061').text($('#mars_525').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_049').addClass('display');
    $('#mars_094').text($('#mars_053').text());
  });

  $('#mars_390').mouseenter(function () {
    $('#mars_529').addClass('active_1');
    $('#mars_530').addClass('active_2');
    $('#mars_533, #mars_534, #mars_535').addClass('visible');
  });
  $('#mars_390').mouseleave(function () {
    $('#mars_529').removeClass('active_1');
    $('#mars_530').removeClass('active_2');
    $('#mars_533, #mars_534, #mars_535').removeClass('visible');
  });
  $('#mars_390').click(function () {
    $('#mars_053').text($('#mars_529').text());
    $('#mars_100').text($('#mars_529').text() + " | Mars");
    $('#mars_057').text($('#mars_530').text());
    $('#mars_059').text($('#mars_531').text());
    $('#mars_051').attr("src", $('#mars_532').attr('src'));
    $('#mars_055').text($('#mars_532').attr('alt'));
    $('#mars_061').text($('#mars_532').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_391').mouseenter(function () {
    $('#mars_536').addClass('active_1');
    $('#mars_537').addClass('active_2');
    $('#mars_540, #mars_541, #mars_542').addClass('visible');
  });
  $('#mars_391').mouseleave(function () {
    $('#mars_536').removeClass('active_1');
    $('#mars_537').removeClass('active_2');
    $('#mars_540, #mars_541, #mars_542').removeClass('visible');
  });
  $('#mars_391').click(function () {
    $('#mars_053').text($('#mars_536').text());
    $('#mars_100').text($('#mars_536').text() + " | Mars");
    $('#mars_057').text($('#mars_537').text());
    $('#mars_059').text($('#mars_538').text());
    $('#mars_051').attr("src", $('#mars_539').attr('src'));
    $('#mars_055').text($('#mars_539').attr('alt'));
    $('#mars_061').text($('#mars_539').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_392').mouseenter(function () {
    $('#mars_543').addClass('active_1');
    $('#mars_544').addClass('active_2');
    $('#mars_547, #mars_548, #mars_549').addClass('visible');
  });
  $('#mars_392').mouseleave(function () {
    $('#mars_543').removeClass('active_1');
    $('#mars_544').removeClass('active_2');
    $('#mars_547, #mars_548, #mars_549').removeClass('visible');
  });
  $('#mars_392').click(function () {
    $('#mars_053').text($('#mars_543').text());
    $('#mars_100').text($('#mars_543').text() + " | Mars");
    $('#mars_057').text($('#mars_544').text());
    $('#mars_059').text($('#mars_545').text());
    $('#mars_051').attr("src", $('#mars_546').attr('src'));
    $('#mars_055').text($('#mars_546').attr('alt'));
    $('#mars_061').text($('#mars_546').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_393').mouseenter(function () {
    $('#mars_550').addClass('active_1');
    $('#mars_551').addClass('active_2');
    $('#mars_554, #mars_555, #mars_556').addClass('visible');
  });
  $('#mars_393').mouseleave(function () {
    $('#mars_550').removeClass('active_1');
    $('#mars_551').removeClass('active_2');
    $('#mars_554, #mars_555, #mars_556').removeClass('visible');
  });
  $('#mars_393').click(function () {
    $('#mars_053').text($('#mars_550').text());
    $('#mars_100').text($('#mars_550').text() + " | Mars");
    $('#mars_057').text($('#mars_551').text());
    $('#mars_059').text($('#mars_552').text());
    $('#mars_051').attr("src", $('#mars_553').attr('src'));
    $('#mars_055').text($('#mars_553').attr('alt'));
    $('#mars_061').text($('#mars_553').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_394').mouseenter(function () {
    $('#mars_557').addClass('active_1');
    $('#mars_558').addClass('active_2');
    $('#mars_561, #mars_562, #mars_563').addClass('visible');
  });
  $('#mars_394').mouseleave(function () {
    $('#mars_557').removeClass('active_1');
    $('#mars_558').removeClass('active_2');
    $('#mars_561, #mars_562, #mars_563').removeClass('visible');
  });
  $('#mars_394').click(function () {
    $('#mars_053').text($('#mars_557').text());
    $('#mars_100').text($('#mars_557').text() + " | Mars");
    $('#mars_057').text($('#mars_558').text());
    $('#mars_059').text($('#mars_559').text());
    $('#mars_051').attr("src", $('#mars_560').attr('src'));
    $('#mars_055').text($('#mars_560').attr('alt'));
    $('#mars_061').text($('#mars_560').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_564').mouseenter(function () {
    $('#mars_565').addClass('active_1');
    $('#mars_566').addClass('active_2');
    $('#mars_569, #mars_570, #mars_571').addClass('visible');
  });
  $('#mars_564').mouseleave(function () {
    $('#mars_565').removeClass('active_1');
    $('#mars_566').removeClass('active_2');
    $('#mars_569, #mars_570, #mars_571').removeClass('visible');
  });
  $('#mars_564').click(function () {
    $('#mars_053').text($('#mars_565').text());
    $('#mars_100').text($('#mars_565').text() + " | Mars");
    $('#mars_057').text($('#mars_566').text());
    $('#mars_059').text($('#mars_567').text());
    $('#mars_051').attr("src", $('#mars_568').attr('src'));
    $('#mars_055').text($('#mars_568').attr('alt'));
    $('#mars_061').text($('#mars_568').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_572').mouseenter(function () {
    $('#mars_573').addClass('active_1');
    $('#mars_574').addClass('active_2');
    $('#mars_577, #mars_578, #mars_579').addClass('visible');
  });
  $('#mars_572').mouseleave(function () {
    $('#mars_573').removeClass('active_1');
    $('#mars_574').removeClass('active_2');
    $('#mars_577, #mars_578, #mars_579').removeClass('visible');
  });
  $('#mars_572').click(function () {
    $('#mars_053').text($('#mars_573').text());
    $('#mars_100').text($('#mars_573').text() + " | Mars");
    $('#mars_057').text($('#mars_574').text());
    $('#mars_059').text($('#mars_575').text());
    $('#mars_051').attr("src", $('#mars_576').attr('src'));
    $('#mars_055').text($('#mars_576').attr('alt'));
    $('#mars_061').text($('#mars_576').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_580').mouseenter(function () {
    $('#mars_581').addClass('active_1');
    $('#mars_582').addClass('active_2');
    $('#mars_585, #mars_586, #mars_587').addClass('visible');
  });
  $('#mars_580').mouseleave(function () {
    $('#mars_581').removeClass('active_1');
    $('#mars_582').removeClass('active_2');
    $('#mars_585, #mars_586, #mars_587').removeClass('visible');
  });
  $('#mars_580').click(function () {
    $('#mars_053').text($('#mars_581').text());
    $('#mars_100').text($('#mars_581').text() + " | Mars");
    $('#mars_057').text($('#mars_582').text());
    $('#mars_059').text($('#mars_583').text());
    $('#mars_051').attr("src", $('#mars_584').attr('src'));
    $('#mars_055').text($('#mars_584').attr('alt'));
    $('#mars_061').text($('#mars_584').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_588').mouseenter(function () {
    $('#mars_589').addClass('active_1');
    $('#mars_590').addClass('active_2');
    $('#mars_593, #mars_594, #mars_595').addClass('visible');
  });
  $('#mars_588').mouseleave(function () {
    $('#mars_589').removeClass('active_1');
    $('#mars_590').removeClass('active_2');
    $('#mars_593, #mars_594, #mars_595').removeClass('visible');
  });
  $('#mars_588').click(function () {
    $('#mars_053').text($('#mars_589').text());
    $('#mars_100').text($('#mars_589').text() + " | Mars");
    $('#mars_057').text($('#mars_590').text());
    $('#mars_059').text($('#mars_591').text());
    $('#mars_051').attr("src", $('#mars_592').attr('src'));
    $('#mars_055').text($('#mars_592').attr('alt'));
    $('#mars_061').text($('#mars_592').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_596').mouseenter(function () {
    $('#mars_597').addClass('active_1');
    $('#mars_598').addClass('active_2');
    $('#mars_601, #mars_602, #mars_603').addClass('visible');
  });
  $('#mars_596').mouseleave(function () {
    $('#mars_597').removeClass('active_1');
    $('#mars_598').removeClass('active_2');
    $('#mars_601, #mars_602, #mars_603').removeClass('visible');
  });
  $('#mars_596').click(function () {
    $('#mars_053').text($('#mars_597').text());
    $('#mars_100').text($('#mars_597').text() + " | Mars");
    $('#mars_057').text($('#mars_598').text());
    $('#mars_059').text($('#mars_599').text());
    $('#mars_051').attr("src", $('#mars_600').attr('src'));
    $('#mars_055').text($('#mars_600').attr('alt'));
    $('#mars_061').text($('#mars_600').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_604').mouseenter(function () {
    $('#mars_605').addClass('active_1');
    $('#mars_606').addClass('active_2');
    $('#mars_609, #mars_610, #mars_611').addClass('visible');
  });
  $('#mars_604').mouseleave(function () {
    $('#mars_605').removeClass('active_1');
    $('#mars_606').removeClass('active_2');
    $('#mars_609, #mars_610, #mars_611').removeClass('visible');
  });
  $('#mars_604').click(function () {
    $('#mars_053').text($('#mars_605').text());
    $('#mars_100').text($('#mars_605').text() + " | Mars");
    $('#mars_057').text($('#mars_606').text());
    $('#mars_059').text($('#mars_607').text());
    $('#mars_051').attr("src", $('#mars_608').attr('src'));
    $('#mars_055').text($('#mars_608').attr('alt'));
    $('#mars_061').text($('#mars_608').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_612').mouseenter(function () {
    $('#mars_613').addClass('active_1');
    $('#mars_614').addClass('active_2');
    $('#mars_617, #mars_618, #mars_619').addClass('visible');
  });
  $('#mars_612').mouseleave(function () {
    $('#mars_613').removeClass('active_1');
    $('#mars_614').removeClass('active_2');
    $('#mars_617, #mars_618, #mars_619').removeClass('visible');
  });
  $('#mars_612').click(function () {
    $('#mars_053').text($('#mars_613').text());
    $('#mars_100').text($('#mars_613').text() + " | Mars");
    $('#mars_057').text($('#mars_614').text());
    $('#mars_059').text($('#mars_615').text());
    $('#mars_051').attr("src", $('#mars_616').attr('src'));
    $('#mars_055').text($('#mars_616').attr('alt'));
    $('#mars_061').text($('#mars_616').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_620').mouseenter(function () {
    $('#mars_621').addClass('active_1');
    $('#mars_622').addClass('active_2');
    $('#mars_625, #mars_626, #mars_627').addClass('visible');
  });
  $('#mars_620').mouseleave(function () {
    $('#mars_621').removeClass('active_1');
    $('#mars_622').removeClass('active_2');
    $('#mars_625, #mars_626, #mars_627').removeClass('visible');
  });
  $('#mars_620').click(function () {
    $('#mars_053').text($('#mars_621').text());
    $('#mars_100').text($('#mars_621').text() + " | Mars");
    $('#mars_057').text($('#mars_622').text());
    $('#mars_059').text($('#mars_623').text());
    $('#mars_051').attr("src", $('#mars_624').attr('src'));
    $('#mars_055').text($('#mars_624').attr('alt'));
    $('#mars_061').text($('#mars_624').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_628').mouseenter(function () {
    $('#mars_629').addClass('active_1');
    $('#mars_630').addClass('active_2');
    $('#mars_633, #mars_634, #mars_635').addClass('visible');
  });
  $('#mars_628').mouseleave(function () {
    $('#mars_629').removeClass('active_1');
    $('#mars_630').removeClass('active_2');
    $('#mars_633, #mars_634, #mars_635').removeClass('visible');
  });
  $('#mars_628').click(function () {
    $('#mars_053').text($('#mars_629').text());
    $('#mars_100').text($('#mars_629').text() + " | Mars");
    $('#mars_057').text($('#mars_630').text());
    $('#mars_059').text($('#mars_631').text());
    $('#mars_051').attr("src", $('#mars_632').attr('src'));
    $('#mars_055').text($('#mars_632').attr('alt'));
    $('#mars_061').text($('#mars_632').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_636').mouseenter(function () {
    $('#mars_637').addClass('active_1');
    $('#mars_638').addClass('active_2');
    $('#mars_641, #mars_642, #mars_643').addClass('visible');
  });
  $('#mars_636').mouseleave(function () {
    $('#mars_637').removeClass('active_1');
    $('#mars_638').removeClass('active_2');
    $('#mars_641, #mars_642, #mars_643').removeClass('visible');
  });
  $('#mars_636').click(function () {
    $('#mars_053').text($('#mars_637').text());
    $('#mars_100').text($('#mars_637').text() + " | Mars");
    $('#mars_057').text($('#mars_638').text());
    $('#mars_059').text($('#mars_639').text());
    $('#mars_051').attr("src", $('#mars_640').attr('src'));
    $('#mars_055').text($('#mars_640').attr('alt'));
    $('#mars_061').text($('#mars_640').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_644').mouseenter(function () {
    $('#mars_645').addClass('active_1');
    $('#mars_646').addClass('active_2');
    $('#mars_649, #mars_650, #mars_651').addClass('visible');
  });
  $('#mars_644').mouseleave(function () {
    $('#mars_645').removeClass('active_1');
    $('#mars_646').removeClass('active_2');
    $('#mars_649, #mars_650, #mars_651').removeClass('visible');
  });
  $('#mars_644').click(function () {
    $('#mars_053').text($('#mars_645').text());
    $('#mars_100').text($('#mars_645').text() + " | Mars");
    $('#mars_057').text($('#mars_646').text());
    $('#mars_059').text($('#mars_647').text());
    $('#mars_051').attr("src", $('#mars_648').attr('src'));
    $('#mars_055').text($('#mars_648').attr('alt'));
    $('#mars_061').text($('#mars_648').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  $('#mars_652').mouseenter(function () {
    $('#mars_653').addClass('active_1');
    $('#mars_654').addClass('active_2');
    $('#mars_657, #mars_658, #mars_659').addClass('visible');
  });
  $('#mars_652').mouseleave(function () {
    $('#mars_653').removeClass('active_1');
    $('#mars_654').removeClass('active_2');
    $('#mars_657, #mars_658, #mars_659').removeClass('visible');
  });
  $('#mars_652').click(function () {
    $('#mars_053').text($('#mars_653').text());
    $('#mars_100').text($('#mars_653').text() + " | Mars");
    $('#mars_057').text($('#mars_654').text());
    $('#mars_059').text($('#mars_655').text());
    $('#mars_051').attr("src", $('#mars_656').attr('src'));
    $('#mars_055').text($('#mars_656').attr('alt'));
    $('#mars_061').text($('#mars_656').attr('color'));
    $('body').addClass('disable_scroll')
    $('#mars_094').text($('#mars_053').text());
    $('#mars_049').addClass('display');
  });

  /*Size Selection Starts*/
  $('#mars_067').click(function () {
    $(this).addClass('active_3');
    $('#mars_071').text('Small')
    $('#mars_068, #mars_069, #mars_070').removeClass('active_3');
  });
  $('#mars_068').click(function () {
    $(this).addClass('active_3');
    $('#mars_071').text('medium')
    $('#mars_067, #mars_069, #mars_070').removeClass('active_3');
  });
  $('#mars_069').click(function () {
    $(this).addClass('active_3');
    $('#mars_071').text('Large')
    $('#mars_067, #mars_068, #mars_070').removeClass('active_3');
  });
  $('#mars_070').click(function () {
    $(this).addClass('active_3');
    $('#mars_071').text('Extra Large')
    $('#mars_067, #mars_068, #mars_069').removeClass('active_3');
  });
  /*Size Selection Ends*/

  /*add to cart and wish list starts*/
  $('#mars_086').mouseenter(function () {
    $('#mars_084').addClass('active_5')
  });
  $('#mars_086').mouseleave(function () {
    $('#mars_084').removeClass('active_5')
  });
  $('#mars_088').mouseenter(function () {
    $('#mars_087').addClass('active_5')
  });
  $('#mars_088').mouseleave(function () {
    $('#mars_087').removeClass('active_5')
  });
  /*add to cart and wish list ends*/

  /*review and Description starts*/
  $('#mars_082').click(function () {
    $(this).addClass('active_4');
    $('#mars_083').removeClass('active_4');
    $('#mars_089').addClass('display');
    $('#mars_093').removeClass('display');
  });
  $('#mars_083').click(function () {
    $(this).addClass('active_4');
    $('#mars_082').removeClass('active_4');
    $('#mars_089').removeClass('display');
    $('#mars_093').addClass('display');
  });

    /*rating starts*/
  $('#mars_095').mouseenter(function () {
    $(this).addClass('checked');
  });
  $('#mars_095').click(function () {
    $(this).addClass('checked_1');
    $('#mars_096').removeClass('checked_1');
    $('#mars_097').removeClass('checked_1');
    $('#mars_098').removeClass('checked_1');
    $('#mars_099').removeClass('checked_1');
  });
  $('#mars_095').mouseleave(function () {
    $(this).removeClass('checked');
  });
  $('#mars_096').mouseenter(function () {
    $(this).addClass('checked');
    $('#mars_095').addClass('checked');
  });
  $('#mars_096').click(function () {
    $(this).addClass('checked_1');
    $('#mars_097').removeClass('checked_1');
    $('#mars_098').removeClass('checked_1');
    $('#mars_099').removeClass('checked_1');
    $('#mars_095').addClass('checked_1');
  });
  $('#mars_096').mouseleave(function () {
    $(this).removeClass('checked');
    $('#mars_095').removeClass('checked');
  });
  $('#mars_097').mouseenter(function () {
    $(this).addClass('checked');
    $('#mars_095').addClass('checked');
    $('#mars_096').addClass('checked');
  });
  $('#mars_097').click(function () {
    $(this).addClass('checked_1');
    $('#mars_098').removeClass('checked_1');
    $('#mars_099').removeClass('checked_1');
    $('#mars_095').addClass('checked_1');
    $('#mars_096').addClass('checked_1');
  });
  $('#mars_097').mouseleave(function () {
    $(this).removeClass('checked');
    $('#mars_095').removeClass('checked');
    $('#mars_096').removeClass('checked');
  });
  $('#mars_098').mouseenter(function () {
    $(this).addClass('checked');
    $('#mars_095').addClass('checked');
    $('#mars_096').addClass('checked');
    $('#mars_097').addClass('checked');
  });
  $('#mars_098').click(function () {
    $(this).addClass('checked_1');
    $('#mars_099').removeClass('checked_1');
    $('#mars_095').addClass('checked_1');
    $('#mars_096').addClass('checked_1');
    $('#mars_097').addClass('checked_1');
  });
  $('#mars_098').mouseleave(function () {
    $(this).removeClass('checked');
    $('#mars_095').removeClass('checked');
    $('#mars_096').removeClass('checked');
    $('#mars_097').removeClass('checked');
  });
  $('#mars_099').mouseenter(function () {
    $(this).addClass('checked');
    $('#mars_095').addClass('checked');
    $('#mars_096').addClass('checked');
    $('#mars_097').addClass('checked');
    $('#mars_098').addClass('checked');
  });
  $('#mars_099').click(function () {
    $(this).addClass('checked_1');
    $('#mars_095').addClass('checked_1');
    $('#mars_096').addClass('checked_1');
    $('#mars_097').addClass('checked_1');
    $('#mars_098').addClass('checked_1');
  });
  $('#mars_099').mouseleave(function () {
    $(this).removeClass('checked');
    $('#mars_095').removeClass('checked');
    $('#mars_096').removeClass('checked');
    $('#mars_097').removeClass('checked');
    $('#mars_098').removeClass('checked');
  });
    /*rating ends*/

  /*review and Description ends*/

/*For Product thumbnail end*/

/*For Categories Men's Fashion starts*/
  $('#mars_363').mouseenter(function () {
    $(this).addClass('active_1');
  });
  $('#mars_363').mouseleave(function () {
    $(this).removeClass('active_1');
  });
  $('#mars_363').click(function () {
    $(this).addClass('active_8');
    $('#mars_337, #mars_341, #mars_342').removeClass('active_8');
    $('#mars_346, #mars_347, #mars_364, #mars_365, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_368, #mars_369, #mars_370').addClass('display');
    $('#mars_368, #mars_369, #mars_370, #mars_334, #mars_338').removeClass('display_none')
    $('#mars_335, #mars_339').addClass('display_none');
    $('#mars_336, #mars_340, #mars_345').addClass('dropdown_1');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_375, #mars_376, #mars_377, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').addClass('display');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_375, #mars_376, #mars_377, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').removeClass('display_none');
  });

  $('#mars_337').mouseenter(function () {
    $(this).addClass('active_1');
    $('#mars_334').addClass('active_7');
    $('#mars_335').addClass('active_7');
  });
  $('#mars_337').mouseleave(function () {
    $(this).removeClass('active_1');
    $('#mars_334').removeClass('active_7');
    $('#mars_335').removeClass('active_7');
  });
  $('#mars_337').click(function () {
    $(this).addClass('active_8');
    $('#mars_346').addClass('active_1');
    $('#mars_347, #mars_348, #mars_364, #mars_365').removeClass('active_1');
    $('#mars_341, #mars_342, #mars_363').removeClass('active_8');
    $('#mars_334, #mars_339, #mars_344, #mars_369, #mars_370').addClass('display_none');
    $('#mars_335, #mars_338, #mars_343, #mars_368').removeClass('display_none');
    $('#mars_368').addClass('display');
    $('#mars_369, #mars_370').removeClass('display');
    $('#mars_336').removeClass('dropdown_1');
    $('#mars_340, #mars_345').addClass('dropdown_1');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_375, #mars_376, #mars_377, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').addClass('display');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_375, #mars_376, #mars_377, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').removeClass('display_none');
  });
  $('#mars_346').click(function () {
    $(this).addClass('active_1');
    $('#mars_364, #mars_365, #mars_347, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_337').addClass('active_8');
    $('#mars_363, #mars_341, #mars_342').removeClass('active_8');
    $('#mars_368,#mars_338').removeClass('display_none');
    $('#mars_368, #mars_338').addClass('display');
    $('#mars_369, #mars_370, #mars_339').removeClass('display');
    $('#mars_369, #mars_370, #mars_339').addClass('display_none');
    $('#mars_340').addClass('dropdown_1')
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_375, #mars_376, #mars_377, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').addClass('display');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_375, #mars_376, #mars_377, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').removeClass('display_none');
  });
  $('#mars_364').click(function () {
    $(this).addClass('active_1');
    $('#mars_346, #mars_365, #mars_347, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_337').addClass('active_8');
    $('#mars_363, #mars_341, #mars_342').removeClass('active_8');
    $('#mars_368,#mars_338').removeClass('display_none');
    $('#mars_368, #mars_338').addClass('display');
    $('#mars_369, #mars_370, #mars_339').removeClass('display');
    $('#mars_369, #mars_370, #mars_339').addClass('display_none');
    $('#mars_340').addClass('dropdown_1')
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_376, #mars_377').addClass('display');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_376, #mars_377').removeClass('display_none');
    $('#mars_375, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').addClass('display_none');
    $('#mars_375, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').removeClass('display');
  });
  $('#mars_365').click(function () {
    $(this).addClass('active_1');
    $('#mars_346, #mars_364, #mars_347, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_337').addClass('active_8');
    $('#mars_363, #mars_341, #mars_342').removeClass('active_8');
    $('#mars_368,#mars_338').removeClass('display_none');
    $('#mars_368, #mars_338').addClass('display');
    $('#mars_369, #mars_370, #mars_339').removeClass('display');
    $('#mars_369, #mars_370, #mars_339').addClass('display_none');
    $('#mars_340').addClass('dropdown_1')
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_376, #mars_377').addClass('display_none');
    $('#mars_371, #mars_372, #mars_373, #mars_374, #mars_376, #mars_377').removeClass('display');
    $('#mars_375, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').addClass('display');
    $('#mars_375, #mars_378, #mars_379, #mars_380, #mars_381, #mars_382').removeClass('display_none');
  });
  $('#mars_334').click(function () {
    $('#mars_334').addClass('display_none');
    $('#mars_335').removeClass('display_none');
    $('#mars_336').removeClass('dropdown_1');
  });
  $('#mars_335').click(function () {
    $(this).addClass('display_none');
    $('#mars_334').removeClass('display_none');
    $('#mars_336').addClass('dropdown_1');
  });

  $('#mars_341').mouseenter(function () {
    $(this).addClass('active_1');
    $('#mars_338').addClass('active_7');
    $('#mars_339').addClass('active_7');
  });
  $('#mars_341').mouseleave(function () {
    $(this).removeClass('active_1');
    $('#mars_338').removeClass('active_7');
    $('#mars_339').removeClass('active_7');
  });
  $('#mars_341').click(function () {
    $(this).addClass('active_8');
    $('#mars_347').addClass('active_1');
    $('#mars_346, #mars_364, #mars_365, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_337, #mars_342, #mars_363').removeClass('active_8');
    $('#mars_335, #mars_338, #mars_344, #mars_368, #mars_370').addClass('display_none');
    $('#mars_334, #mars_339, #mars_343, #mars_369').removeClass('display_none');
    $('#mars_369').addClass('display');
    $('#mars_340').removeClass('dropdown_1');
    $('#mars_336, #mars_345').addClass('dropdown_1');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388, #mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').removeClass('display_none');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388, #mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').addClass('display');
  });
  $('#mars_347').click(function () {
    $(this).addClass('active_1');
    $('#mars_346, #mars_364, #mars_365, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_341').addClass('active_8');
    $('#mars_363, #mars_337, #mars_342').removeClass('active_8');
    $('#mars_369, #mars_334').removeClass('display_none');
    $('#mars_369, #mars_334').addClass('display');
    $('#mars_335, #mars_368, #mars_370').removeClass('display');
    $('#mars_335, #mars_368, #mars_370').addClass('display_none');
    $('#mars_336').addClass('dropdown_1');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388, #mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').removeClass('display_none');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388, #mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').addClass('display');
  });
  $('#mars_366').click(function () {
    $(this).addClass('active_1');
    $('#mars_346, #mars_347, #mars_364, #mars_365, #mars_367').removeClass('active_1');
    $('#mars_341').addClass('active_8');
    $('#mars_363, #mars_337, #mars_342').removeClass('active_8');
    $('#mars_369, #mars_334').removeClass('display_none');
    $('#mars_369, #mars_334').addClass('display');
    $('#mars_335, #mars_368, #mars_370').removeClass('display');
    $('#mars_335, #mars_368, #mars_370').addClass('display_none');
    $('#mars_336').addClass('dropdown_1');
    $('#mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').removeClass('display_none');
    $('#mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').addClass('display');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388').removeClass('display');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388').addClass('display_none');
  });
  $('#mars_367').click(function () {
    $(this).addClass('active_1');
    $('#mars_346, #mars_347, #mars_364, #mars_365, #mars_366').removeClass('active_1');
    $('#mars_341').addClass('active_8');
    $('#mars_363, #mars_337, #mars_342').removeClass('active_8');
    $('#mars_369, #mars_334').removeClass('display_none');
    $('#mars_369, #mars_334').addClass('display');
    $('#mars_335, #mars_368, #mars_370').removeClass('display');
    $('#mars_335, #mars_368, #mars_370').addClass('display_none');
    $('#mars_336').addClass('dropdown_1');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388').removeClass('display_none');
    $('#mars_383, #mars_384, #mars_385, #mars_386, #mars_387, #mars_388').addClass('display');
    $('#mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').addClass('display_none');
    $('#mars_389, #mars_390, #mars_391, #mars_392, #mars_393, #mars_394').removeClass('display');
  });
  $('#mars_338').click(function () {
    $(this).addClass('display_none');
    $('#mars_339').removeClass('display_none');
    $('#mars_340').removeClass('dropdown_1');
  });
  $('#mars_339').click(function () {
    $(this).addClass('display_none');
    $('#mars_338').removeClass('display_none');
    $('#mars_340').addClass('dropdown_1');
  });

  $('#mars_342').mouseenter(function () {
    $(this).addClass('active_1');
    $('#mars_343').addClass('active_7');
    $('#mars_344').addClass('active_7');
  });
  $('#mars_342').mouseleave(function () {
    $(this).removeClass('active_1');
    $('#mars_343').removeClass('active_7');
    $('#mars_344').removeClass('active_7');
  });
  $('#mars_342').click(function () {
    $(this).addClass('active_8');
    $('#mars_348').addClass('active_1');
    $('#mars_346, #mars_347, #mars_364, #mars_365, #mars_366, #mars_367').removeClass('active_1');
    $('#mars_337, #mars_341, #mars_363').removeClass('active_8');
    $('#mars_335, #mars_339, #mars_343, #mars_368, #mars_369').addClass('display_none');
    $('#mars_334, #mars_344, #mars_338, #mars_370').removeClass('display_none');
    $('#mars_370').addClass('display');
    $('#mars_345').removeClass('dropdown_1');
    $('#mars_336, #mars_340').addClass('dropdown_1');
  });
  $('#mars_343').click(function () {
    $(this).addClass('display_none');
    $('#mars_344').removeClass('display_none');
    $('#mars_345').removeClass('dropdown_1');
  });
  $('#mars_344').click(function () {
    $(this).addClass('display_none');
    $('#mars_343').removeClass('display_none');
    $('#mars_345').addClass('dropdown_1');
  });
/*For Categories Men's Fashion ends*/

/*Footer Columns starts*/
  $('.mars_284').mouseenter(function () {
    $(this).addClass('active_1');
  });
  $('.mars_284').mouseleave(function () {
    $(this).removeClass('active_1');
  });
  $('#mars_292').mouseenter(function () {
    $('#mars_293').addClass("slider");
  });
  $('#mars_292').mouseleave(function () {
    $('#mars_293').removeClass("slider");
  });
  $('#mars_294').mouseenter(function () {
    $('#mars_295').addClass("slider");
  });
  $('#mars_294').mouseleave(function () {
    $('#mars_295').removeClass("slider");
  });
  $('#mars_296').mouseenter(function () {
    $('#mars_297').addClass("slider");
  });
  $('#mars_296').mouseleave(function () {
    $('#mars_297').removeClass("slider");
  });
  $('#mars_298').mouseenter(function () {
    $('#mars_299').addClass("slider");
  });
  $('#mars_298').mouseleave(function () {
    $('#mars_299').removeClass("slider");
  });
  $('#mars_300').mouseenter(function () {
    $('#mars_301').addClass("slider");
  });
  $('#mars_300').mouseleave(function () {
    $('#mars_301').removeClass("slider");
  });
  $('#mars_302').mouseenter(function () {
    $('#mars_303').addClass("slider");
  });
  $('#mars_302').mouseleave(function () {
    $('#mars_303').removeClass("slider");
  });
  $('#mars_304').mouseenter(function () {
    $('#mars_305').addClass("slider");
  });
  $('#mars_304').mouseleave(function () {
    $('#mars_305').removeClass("slider");
  });
  $('#mars_306').mouseenter(function () {
    $('#mars_307').addClass("slider");
  });
  $('#mars_306').mouseleave(function () {
    $('#mars_307').removeClass("slider");
  });
  $('#mars_308').mouseenter(function () {
    $('#mars_309').addClass("slider");
  });
  $('#mars_308').mouseleave(function () {
    $('#mars_309').removeClass("slider");
  });
  $('#mars_310').mouseenter(function () {
    $('#mars_311').addClass("slider");
  });
  $('#mars_310').mouseleave(function () {
    $('#mars_311').removeClass("slider");
  });
  $('#mars_312').mouseenter(function () {
    $('#mars_313').addClass("slider");
  });
  $('#mars_312').mouseleave(function () {
    $('#mars_313').removeClass("slider");
  });
  $('#mars_314').mouseenter(function () {
    $('#mars_315').addClass("slider");
  });
  $('#mars_314').mouseleave(function () {
    $('#mars_315').removeClass("slider");
  });
  $('#mars_316').mouseenter(function () {
    $('#mars_317').addClass("slider");
  });
  $('#mars_316').mouseleave(function () {
    $('#mars_317').removeClass("slider");
  });
  $('#mars_318').mouseenter(function () {
    $('#mars_319').addClass("slider");
  });
  $('#mars_318').mouseleave(function () {
    $('#mars_319').removeClass("slider");
  });
  $('#mars_320').mouseenter(function () {
    $('#mars_321').addClass("slider");
  });
  $('#mars_320').mouseleave(function () {
    $('#mars_321').removeClass("slider");
  });
  $('#mars_322').mouseenter(function () {
    $('#mars_323').addClass("slider");
  });
  $('#mars_322').mouseleave(function () {
    $('#mars_323').removeClass("slider");
  });
  $('#mars_324').mouseenter(function () {
    $('#mars_325').addClass("slider");
  });
  $('#mars_324').mouseleave(function () {
    $('#mars_325').removeClass("slider");
  });
  $('#mars_326').mouseenter(function () {
    $('#mars_327').addClass("slider");
  });
  $('#mars_326').mouseleave(function () {
    $('#mars_327').removeClass("slider");
  });

/*Footer Columns ends*/
});
