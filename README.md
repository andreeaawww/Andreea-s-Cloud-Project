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
 authentification: API Key
2. Google Sheets 
 authentification: API Key
3. Google Drive (no authentification)

## Descriere arhitectura
Aplicatia este reprezentata integral printr-o pagina Web construita in ReactJS. 
In aplicatie sunt folosite 2 API-uri: Google Sheets (GET) si Google Drive (GET).
Imaginile prezentate in pagina web au fost realizate utilizand Python prin intermediul Google Colab. Acesta este un serviciu cloud Google Provided ce permite realizarea de analize.

*exemplu de Request/Response - read GHK Holidays for 2019 from Holidays API
```js
        fetch('https://holidayapi.com/v1/holidays?pretty&key=5ea6c2ff-b244-4071-8fc4-ae5250c6d993&country=GB&year=2019')
            .then(response => response.json())
            .then(response => this.setState({
                holidays: [{name:'NAME', date:'DATE'}].concat(response.holidays)
            }))
            .catch(error => console.log(error))
```

