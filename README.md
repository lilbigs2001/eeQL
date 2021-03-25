# eeQL
<img width="673" alt="eeql_github copy" src="https://user-images.githubusercontent.com/71619815/112024099-150f2e80-8af1-11eb-80b8-7280bfaa85b3.png">

_"EEQL is a standalone test creation suite that constructs reliable endpoint tests for both GraphQL and RESTful API's."_. 

<br/>

## Installation

Please dive into [eeQL.io](https://www.eeql.io/) to install this application. 

Refer to our [Builds/Resources](https://github.com/oslabs-beta/eeQL/releases) for more information on compatability and previous releases.

<br/>

## Usage
### GETTING STARTED

![eeql-1-gif](https://user-images.githubusercontent.com/71619815/112025449-67048400-8af2-11eb-9b8f-71187e8ba7f2.gif)

- Input desired port for proper integration into your project
- Upload a project directory (note: a testing folder will be created if none exists).
- eeQL will automatically create, display and locate testing files within your uploaded project to facilitate reliable test creation.

<br/>

### TEST CREATION
![eeql-2-gif](https://user-images.githubusercontent.com/71619815/112027649-9b793f80-8af4-11eb-8574-4337a12d9595.gif)

REST
- Select the REST button
- Select the request method that you plan on testing
- Upload the server file of your project
- Fill out the requested fields within the _Test Builder Module_
- Press the save button to automatically create a Jest-and-Supertest-based REST test !

GRAPHQL
- Select the GraphQL button
- Upload the schema file of your project
- Upload the resolvers file of your project
- Provide a description of the test
- Determine if the operation is a valid or invalid one
- Provide the operation (query/mutation) text
- Determine if the operation is a query or a mutation
- Optionally, provide a mutation object if the operation is a mutation instead of a query
- Press the save button to generate an easyGraphQL-based operation test!


<br/>

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

<br/>

## Contact and Inquiries
[Contact us](contact@eeql.io) for all other issues/inquiries.

<br/>

## Developers 
[Abu Fofanah](https://www.linkedin.com/in/abu-fofanah/) |
[Jason Speare](https://www.linkedin.com/in/jason-speare/) |
[Kimberley Spicer]( https://www.linkedin.com/in/kimberleyspicer/) |
[Ramtin Khoee](https://www.linkedin.com/in/ramtinkhoee/) |
<br/>

## License
This project is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).


