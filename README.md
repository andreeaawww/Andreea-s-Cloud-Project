# Andreea-s-Cloud-Project
An analytic tool for tracking absenteeism at work

## Descriere Problema

Problema abordata se refera la absenta angajatilor de la locul de munca.
Aplicatia isi propune sa ofere utilizatorilor o solutie analitica ce prezinta intr-un mod vizual:
 - grafice relevante referitoare la absenta de la locul de munca
 - zilele de sarbatori legale ce ar justifica absenta angajatilor
 - setul de date complet al absentelor angajatilor

## Prezentare API-uri utilizate
1. Holidays API: https://holidayapi.com/uses
 - authentification: API Key
 - utilizat pentru afisarea sarbatorilor legale din UK pentru perioada analizata
2. Google Sheets: https://developers.google.com/sheets/api
 - authentification: API Key
 - utilizat pentru afisarea zilelor de absenta de la locul de munca
3. Google Drive: https://developers.google.com/drive
 - Client ID oauth
 - utilizat pentru afisarea graficelor realizate 

## Descriere arhitectura
Aplicatia este reprezentata integral printr-o pagina Web construita in ReactJS. 
In aplicatie sunt folosite 3 API-uri: Google Sheets (GET), Google Drive (GET) Holidays (GET).
Imaginile prezentate in pagina web au fost realizate utilizand Python prin intermediul Google Colab. Acesta este un serviciu cloud Google Provided ce permite realizarea de analize.

#Data Flow:

Data Source: Google Spreadsheets -> imported in Google Colab -> Python analysis -> saved in Google Drive

React App:
 - renders image files from Google Drive
 - calls Holidays API & renders response
 - calls Google Spreadsheets & renders response

*exemplu de Request/Response - read UK Holidays for 2019 from Holidays API
```js
        fetch('https://holidayapi.com/v1/holidays?pretty&key=5ea6c2ff-b244-4071-8fc4-ae5250c6d993&country=GB&year=2019')
            .then(response => response.json())
            .then(response => this.setState({
                holidays: [{name:'NAME', date:'DATE'}].concat(response.holidays)
            }))
            .catch(error => console.log(error))
```

