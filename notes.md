https://testing-library.com/docs/react-testing-library/cheatsheet/

 https://reactjs.org/docs/testing-recipes.html

 https://testing-library.com/docs/queries/about/#priority

- [ ] Types of tests
- [ ] Structure of tests
- [ ] Project structure
- [ ] Package.json - dependancies
- [ ] Scripts
- [ ] Structure of a test file
- [ ] Test block
- [ ] Find elements we want to interact with
- [ ] Screen - relates to render
- [ ] Interact with the elements
- [ ] Eg: button
- [ ] Sometimes no interaction needed
- [ ] Assert results are what we expect
- [ ] * Search
- [ ] Get by text.  Common
- [ ] Findby vs findallby
- [ ] GetBy & GetAllBy
- [ ] QueryBy & QueryAllBy
- [ ] Most of the time we use Get and Query
- [ ] GeyBy - match 1 element, error if not
- [ ] GetAll - match multiple
- [ ] What about async?
- [ ] FindBy - can wait for results
- [ ] QueryBy - doesn't throw error if no match
- [ ] Priority!
- [ ] What search should  use?
- [ ] Try to prioritize by user experience
- [ ] Mimic what the user would see
- [ ] Priority chart online
- [ ] *Using query methods
- [ ] Testing a simple component. Header
- [ ] Show component
- [ ] Make test file
- [ ] Use CRA test as template
- [ ] Render with a prop
- [ ] Get by text
- [ ] Should pass
- [ ] Show failing test, wrong text
- [ ] GetByRole test
- [ ] Eg: Heading <h1>, etc
- [ ] Get role and text
- [ ] Add options to GetByRole. Name:text
- [ ] *Symantic search
- [ ] GetBy title. Title attribute
- [ ] *By ID
- [ ] Last resort, can't find any other way
- [ ] Add id and get
- [ ] Use findby.  Needs to be async
- [ ] *queryby.
- [ ] Copy get
- [ ] Returns null instead of failing
- [ ] We can assert that it's not there.
- [ ] "GetAllbyRole
- [ ] Get both headings.
- [ ] Length should be 2
- [ ] ASSERTIONS
- [ ] Make a footer. Shows a number
- [ ] Make a footer test file
- [ ] Render footer
- [ ] GetBy text.  Count
- [ ] Expect. Expand Many assertions.
- [ ] Eg. Tobetruthy
- [ ] To be visible, etc
- [ ] To contain
- [ ] Can add role= paragraph to p tags so GetByRole works on paragraph
- [ ] To contain html
- [ ] Expect.   .tectContent.toBe ()
- [ ] Can use   .not  on any thing
- [ ] Try to have only 1 assertion per test. Otherwise can get confusing
- [ ] *Describe block.
- [ ] Group common tests
- [ ] Better organization
- [ ] Can have nested describe blocks
- [ ] *Integration testing
- [ ] =Multiple components together
[V] Same as unit tests, just render parent of children
- [ ] "Fire events
- [ ] Can simulate user interaction
- [ ] Click on the +button, should change count
- [ ] Click on - button
- [ ] GetAll by role, or testid
- [ ] Before each, after each examples
- [ ] Just add a console log
- [ ] BeforeAll
- [ ] Also After
- [ ] Use when we have similar functionality between tests
