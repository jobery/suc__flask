$(document).ready(function(){
    $("#btn_agr_det_com").click(function(){ 

        //$("#form").append('<div class="form-row"><div class="col-6"><div class="form-group">');
        //$("#form").append('<div class="form-row"><div class="col-6"><div class="form-group">');

        //$("#productos").clone().appendTo("#form");
        //$(".form-row").clone().appendTo("#form").removeAttr("hidden");
        $("#detproduc").clone().appendTo("#form").removeAttr("hidden","id");

        //$("#form").append('</div></div>');

        var rowcan = '<div class="col-3"><div class="form-group"><input type="number" name="cantidad" class="form-control" placeholder="Cantidad" required></div></div>';
        var rowpre = '<div class="col-3"><div class="form-group"><input type="number" name="precio" class="form-control" placeholder="Precio" required></div></div>';

        var vrow = rowcan+rowpre+'</div>';        

        //$("#form").append(vrow);
    });

    reclistprocon();
    $('#divselectprodd').change(function(){
        reclistprocon();
    });

    function reclistprocon(){
        $.ajax({
            type:"POST",
            url:"cxc/ajax_list_pro_con",
            date:"idconsigna=" + $('#consigna').val(),
            success:function(r){
                $('#divselectprod').html(r);
                console.log(r);
            }
        });
    }
});