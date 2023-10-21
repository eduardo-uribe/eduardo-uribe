---
title: The _data directory
date: 2020-05-12
---

# An overview of the _data directory

The **_data** directory (*Global Data Files Directory*) is where we can store data files whose data will be passed on to all of our template and layout files.

All **.json** and **module.exports** values from **.js** files inside of the **_data** directory will be added into a **global data object**.

The *global **data** object* includes default global data and will also contain any data we include as **.js** or **.json** files in the **_data** directory.

This *global **data** object* is available to all templates and layout files by default.

## Let's look at an example on how to set and use data from our _data directory to get a better understanding of this:

In our following hands-on example, we will create a data file that contains a list of client names.

We will then use that data to create an .html file that displays a list of clients that we've worked with.

Let's start by creating a JSON data file named **clients.json** inside of our **_data** directory.

```treeview
_data/
  `-- clients.json
```

The **clients.json** file will contain an array of client names.


```js
["first-client", "second-client", "third-client"]
```

This **data** is now available to all your templates and layouts inside your **global data object** as the ```key : value``` pair ```clients: ["first-client", "second-client", "third-client"]```

```js
Your Global Data Object:

data: {
  clients: ["first-client", "second-client" "third-client"],

  ... other data inside the global data object...
}
```

The **key** name that is assigned to your data by default is the name of your data file. In this example it is **clients** and it comes from the file name **clients**.json

So, now to access this data we use the key **clients** to get the value inside it, in this instance an array of client names.

Now will see an example of the **client** data been used in a file:

Will create an .html file named **clients-worked-with.html** that will list all of our current client's names.

**File name: clients-worked-with.njk** - this .njk file will be converted to .html when 11ty is run.

```js{% raw %}
<h1> Our Happy Clients: </h1>
<ul>
  {% for client in clients %}
    <li> {{ client }} </li>
  {% endfor %}
</ul>
{% endraw %}
```

![A visual example of using Nunjucks to get data from the global data object.](/assets/images/the-data-directory.png)

Cool...

But what if we have our data files inside a folder to keep things organized? How do we access those files? Good question.

```treeview
_data/
|-- clientInformation/
|   |-- clients.json
|   `-- reviews.json
|-- anotherFolderContainingDataFiles/
`-- andAnotherFolder/
```

In this case the **key** name we use to access the data inside the files is the name of the folder holding the files.

In this example the key is **clientInformation** our name of the folder.

```js
Your Global Data Object:

data: {

  clientInformation: {
    clients: ["first-client", "second-client" "third-client"],
    reviews: ["review-one", "review-two"]
  },
  anotherFolderContainingDataFiles: {...},
  andAnotherFolder: {...},
  ... other data inside the global data object...
}
```

So to access our **clients** names again. 

This is how we do it:

```js{% raw %}
<h1> Our Happy Clients: </h1>
<ul>
  {% for client in clientInformation.clients %}
    <li> {{ client }} </li>
  {% endfor %}
</ul>
{% endraw %}
```

![A visual example of using Nunjucks to get data from the global data object.](/assets/images/the-data-directory.png)

or...

If we wanted to access the **reviews** data file inside our **clientInformation** folder, we would do this:

```js
{% raw %}
<h1> Our Reviews: </h1>
<ul>
  {% for review in clientInformation.reviews %}
    <li> {{ review }} </li>
  {% endfor %}
</ul>
{% endraw %}
```

![A visual example of using Nunjucks to get data from the global data object.](/assets/images/the-data-directory-reviews.png)

Nice...

And there you have it.

Now you know how to access global data from files inside your **_data** directory.


**Helpful side-note**: use of this **_data** directory is optional.
It's not required to use 11ty, but can be a useful directory to help you maintain  a central source of global data.

Hope this micro 11ty tip helps some of you out.