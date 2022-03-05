$(document).ready(function() {
/**
 * Add evento de click
 */
function onAdd() {
       var $ul, li, $li, $label, $div, jogo;
       jogo = $('.js-novo-jogo').val();

       // valida se “livro” está vazio
       if (jogo === '') {
              return;
       }

       $ul = $('ul');
       $li = $('<li>').appendTo($ul);
       $div = $('<div>')
              .addClass('checkbox')
              .appendTo($li);

       $label = $('<label>').appendTo($div);
       $('<input>')
              .attr('type', 'checkbox')
              .addClass('js-jogo')
              .attr('name', 'list')
              .click(toggleRemovido)
              .appendTo($label);

       $label.append(jogo);
       $('.js-novo-jogo').val('');
}

/**
 * Evento de click do checkbox
 */
function toggleRemovido(ev) {
       var $el;
       $el = $(ev.currentTarget);
       $el.closest('li').toggleClass('removido');
}
$('.js-add').click(onAdd);
$('.js-jogo').click(toggleRemovido);
});