// key for child is her name
// TODO get child name, create object
function setChild(childName) {
  let child = {
    name : childName,
    quoteList : []
  }
  return localStorage.setItem(child.name, JSON.stringify(child));
}

function addQuoteToChildList(quote, childName) {
  let child = getChild(childName);
  child.quoteList.push(quote);
  localStorage.setItem(child.name, JSON.stringify(child));
}

// key for quote is child's name followed by quote num
// TODO what happens if quote is erased?
function setChildQuote(childName, quote, date) {
  let numOfQuotes = getChildQuotes(childName).length;
  let quoteKey = childName + numOfQuotes.toString();
  let newQuote = {
    id: quoteKey,
    child: childName, 
    text: quote,
    date: date
  }
  addQuoteToChildList(newQuote, childName);
  localStorage.setItem(quoteKey, JSON.stringify(newQuote));
}

function updateQuoteText(quoteId, newText) {
  let currQuote = getQuote(quoteId);
  currQuote.text = newText;
  localStorage.setItem(quoteId, JSON.stringify(currQuote));
  let currChild = getChild(currQuote.child);
  let childQuoteList = currChild.quoteList;
  for(let i = 0; i < childQuoteList.length; i++){ 
    if (childQuoteList[i].id === quoteId) {
      childQuoteList[i] = currQuote;
    }
  }
  localStorage.setItem(currChild.name, JSON.stringify(currChild))
}

function getChild(childName) {
  return JSON.parse(localStorage.getItem(childName));
}

function getChildren() {
  let childrenArr = [];
  let i = 0;
  let currKey = localStorage.key(0);
  while (currKey != null) {
    if (currKey.charAt(currKey.length-1).toUpperCase() != currKey.charAt(currKey.length-1).toLowerCase()) {
      childrenArr.push(getChild(currKey));
    }
    i++;
    currKey = localStorage.key(i);
  }
  return childrenArr;
}

function getChildQuotes(childName) {
  return getChild(childName).quoteList;
}

function getQuote(quoteId) {
  return JSON.parse(localStorage.getItem(quoteId));
}

function deleteQuote(quote) {
  let currChild = getChild(quote.child);
  let childQuoteList = currChild.quoteList;
  for(let i = 0; i < childQuoteList.length; i++){ 
    if (childQuoteList[i].id === quote.id) {
      childQuoteList.splice(i, 1); 
    }
  }
  localStorage.setItem(currChild.name, JSON.stringify(currChild))
  localStorage.removeItem(quote.id);
}

export {setChild, setChildQuote, getChild, getChildren, getChildQuotes, deleteQuote, getQuote, updateQuoteText};


