$("#js-shopping-list-form").submit(event => {
    // Prevent default submit behaviour
    event.preventDefault(); 
    // select user input
    const addedItem = $(event.currentTarget).find("#shopping-list-entry").val();
    // Add to list
    $('ul').append(`<li><span class="shopping-item">${addedItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
});

// Delegate event so it will also listen to new lis
// We listen for the class .shopping-item-toggle when a button in the ul is clicked
$('ul').on('click','.shopping-item-toggle', function(event) {
// We select the closest li to the class and apply toggle method with the shopping-item__checked class
$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

// We listen for the class .shopping-item-delete when a button in the ul is clicked
$('ul').on('click','.shopping-item-delete', function(event) {
    // Lets remove closest li
    $(this).closest('li').remove();
    });



