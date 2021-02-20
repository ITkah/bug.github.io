$(function() {

    (function quantityProducts() {
        var $quantityArrowMinus = $(".quantity_arrow_minus");
        var $quantityArrowPlus = $(".quantity_arrow_plus");
        var $quantityNum = $(".quantity_num");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();
});