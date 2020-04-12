/**
 * - EXPLANATION -
 * The user will create a new contact with the form tool on the left of the screen and add it to the table on the right.
 * When the Save button is pressed, the fields in the form will be reset.
 * 
 * There will be a search button on the table on the right.
 * Search will be made with the name and surname from the search button.
 */


/**
 * - PROGRAM FLOW -
 * <INDEX.HTML>
 * First of all, it is a 'main tag' where the program will be found!
 * Create two div tag under the main tag! (left and right divs)
 * The left div will be the registration div.
 * The right div will be the list div.
 * Create a table with a search box at the top on the right side
 * ==========
 * <DOM.JS>
 * 
 * ==========
 * <MODEL.JS>
 * We need to create a class about saving all of clients information.
 * - We read data from view and add to new client.
 * - We need to push all data from html to new client object(array).
 * - We create a function so that removes all of ex data; to be able to enter new information.
 * We are creating a new class for editing clients table
 * - We read data from view again
 * We are creating a new class about sorting all information
 * - We sort data by three different functions
 * Filtering class
 * - A method that filters all information
 * 
 * ==========
 * <APP.JS>
 * We can create a client from model.js classes
 * We can use filtering and sorting classes
 * Executing
 * 
 * ==========
 * <STYLE.CSS>
 * 
 */

new ClientsInformation();