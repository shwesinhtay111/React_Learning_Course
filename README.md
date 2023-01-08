# React_Learning_Course
Learn from basic (js,react)

# D26
Class,Module

Standard Library - collection of required function, build in function

Third party - not writtern by own, not starndard library of language

Main parts to learn language - Syntax,Symatic,Pragmatic

JavaScript - Inpretative and Functional Programming need to know

Pragmatic effectively to use- Api, Library,Framework need to know

API - same as restAPI, Language Library Functionality

Set - use to remove duplicated values

Map - mainly use in the case where get value by key

Stack 
      - save reference,make only push and pop 

      - fuction call time save primitive to slack

      - after function call time pop primitive from slack

Heap -save actual object

Garbage occur - garbage occurs in heap

Garbage - not usable in memory called garbage, not usable value having

Garbage Collection - remove unusabel object in heap

WeakMap and WeakSet - To avoid garbage collect instead of using map and set

Weak Reference -key in WeakMap and WeakSet

Size in dynamic variable - biggest size alocated 8 bytes

Typed Array(Uint8Array,Int32Array,etc.) - size in dynamic variable to adjust memory and cpu -Optimizing

Buffer - can use typed array and use same memory location


--------------------------------------------------------------------------------------


# D27

Standard Library

Little endian and big endian -c++ little endian , java big endian

DataView -use to solve between little endian and big endian,not use in daily programming

Pattern Matching(regular expression) - use in daily programming,use in web scraping

web scraping - use from other side data to own, is leagal? from robot of their side can see allow or not

ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet?fbclid=IwAR2FqzJWeaIxjuMAmcTSeA695h_zIiI0PP3xQLlRVYQFA6NkHKvm00iroxI


--------------------------------------------------------------------------------------

# D28
Standard Library2

Regular expression :
Search 
Match
Replace
Split
exec

Dates and Times

Client server transfer - need to send with miliseconds, should not parse in date

UTC timezone : mostly save with UTC in db,clent use their timezone

If need to use datetime - use https://momentjs.com/

JSON -simple to use and popular

Serialization - also called ad mrshalling or even pickling

Why to serialize - can't sent to obj and need to change to string,cause of need to sent agreed format



# D 29
Asynmous

CPU - Fastest

Memory -Middle Fast

I/O -Lowest Fast

Block -Not currently running state,give to ready running state for their cpc place 

Process 1 (cpu)-> IO(io time long) -> Block(give cpu place to process 2)

Process 2(Process 1's cpc place run)


Waiting - wait to run cpu


# D30

Callbacks - function, not immediately run, sometime will run

why need callbacks - process not work order, block state have in middle to process I/O state,callback need to run again I/O delay tasks 

Promise - To solve callback hell-complex with nested callbacks

Chaining in promise - call by then().then method

Fetch API -main is not use jquery, work process - ajax call and get  promise

then() [flatMap]- run after data ready

resolve - success,result get in then() stage, return promise 

reject -error

catch - run in error case,first case(then) must be error and catch can run

# D 31
then(flatMap) - is used to run after real data get

promise.all promise - if one is failed, all will fail.

async awiat : work also by promise

await : call fetch ,get promise, wait promise.then means await

        return promise type,so can do with .then() method

        must be used in await keyword,and can only by used with async funtion



# D32

Meta program - written meta program called meta programming

             - code modifed, make intercept

             - used in framework code, more powerful
             
 # D44 
 React
 
UI element called component

component can be reused

yarn - more rapid than npm,install dependency package in parallel

jsx - javascript html, must have both start tag and end tag,must give name with capital letter

virtual dom - just plain javascript object

JSX -> babel compiler -> createElement -> Virtual DOM(JSON) -> work with react render

html tag must be small letter

DOM diffing -update only differences depend on existing and new,so virtual DOM is fast

render - get vitual dom and render physical dom or render mobile ui in react native

componet -class componet and function componet

class component -can use hook,life cycle

property should be read only

change value - use state

accept input - use property













