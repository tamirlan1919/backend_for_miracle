"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[1539],{91539:(o,t,e)=>{e.r(t),e.d(t,{configurations:()=>n,default:()=>r,from:()=>a});const n="Konfigurationer",a="fr\xE5n",r={"attribute.boolean":"Booleskt v\xE4rde","attribute.boolean.description":"Ja eller nej, 1 eller 0, sant eller falskt","attribute.component":"Komponent","attribute.component.description":"Grupp av f\xE4lt du kan \xE5teranv\xE4nda och repetera","attribute.customField":"Anpassat f\xE4lt","attribute.date":"Datum","attribute.date.description":"En datumv\xE4ljare med sekunder, minuter och timmar","attribute.datetime":"Datum och tid","attribute.dynamiczone":"Dynamisk zon","attribute.dynamiczone.description":"Dynamiskt v\xE4lj mellan f\xF6rutbest\xE4mda komponenter n\xE4r du skapar inneh\xE5ll","attribute.email":"E-post","attribute.email.description":"E-postadressf\xE4lt med validering","attribute.enumeration":"Enumeration","attribute.enumeration.description":"F\xF6rutbest\xE4mda v\xE4rden som man kan v\xE4lja mellan","attribute.json":"JSON","attribute.json.description":"Data i JSON-format","attribute.media":"Media","attribute.media.description":"Filer s\xE5som bilder, videos, m.m","attribute.null":" ","attribute.number":"Nummer","attribute.number.description":"Nummer (heltal och decimaltal)","attribute.password":"L\xF6senord","attribute.password.description":"L\xF6senordsf\xE4lt med kryptering","attribute.relation":"Relation","attribute.relation.description":"Refererar till en samlingstyp","attribute.richtext":"Formaterad text","attribute.richtext.description":"En textredigerare med formatalternativ","attribute.text":"Text","attribute.text.description":"Kort och l\xE5ng text s\xE5som titel eller beskrivning","attribute.time":"Tid","attribute.timestamp":"Tidst\xE4mpel","attribute.uid":"UID","attribute.uid.description":"Unik identifierare","button.attributes.add.another":"L\xE4gg till nytt f\xE4lt","button.component.add":"L\xE4gg till en komponent","button.component.create":"Skapa komponent","button.model.create":"Skapa samlingstyp","button.single-types.create":"Skapa eng\xE5ngstyp","component.repeatable":"(repeterbar)","components.SelectComponents.displayed-value":"{number, plural, =0 {# komponenter} one {# komponent} other {# komponenter}} valda","components.componentSelect.no-component-available":"Du har redan lagt till alla dina komponenter","components.componentSelect.no-component-available.with-search":"Det finns inga komponenter matchande s\xF6kningen","components.componentSelect.value-component":"{number} komponenter valda (skriv f\xF6r att s\xF6ka efter en komponent)","components.componentSelect.value-components":"{number} komponenter valda",configurations:n,"contentType.apiId-plural.description":"Pluraliserat API-ID","contentType.apiId-plural.label":"API ID (Plural)","contentType.apiId-singular.description":"UID:t anv\xE4nds f\xF6r att generera API-rutterna och databastabellerna","contentType.apiId-singular.label":"API ID (Singular)","contentType.collectionName.description":"Anv\xE4ndbart n\xE4r namnet p\xE5 din inneh\xE5llstyp och din tabell \xE4r olika","contentType.collectionName.label":"Samlingsnamn","contentType.displayName.label":"Visningsnamn","contentType.draftAndPublish.description":"Skapa ett utkast av varje inl\xE4gg innan det publiceras","contentType.draftAndPublish.label":"Utkast/publiceringssystem","contentType.kind.change.warning":"Du \xE4ndrade typen p\xE5 en inneh\xE5llstyp: API:n kommer \xE5terskapas (rutter, kontroller, och tj\xE4nster kommer bli \xF6verskrivna).","error.attributeName.reserved-name":"Namnet kan inte anv\xE4ndas f\xF6r att det kan p\xE5verka annan funktionalitet","error.contentType.pluralName-used":"V\xE4rdet kan inte vara samma som namnet i singular","error.contentType.singularName-used":"V\xE4rdet kan inte vara samma som det pluraliserade namnet","error.contentTypeName.reserved-name":"Namnet kan inte anv\xE4ndas i ditt projekt f\xF6r att det kan p\xE5verka annan funktionalitet","error.validation.enum-duplicate":"Dubblettv\xE4rden \xE4r inte till\xE5tna (endast alfanumeriska tecken kontrolleras).","error.validation.enum-empty-string":"Tomma str\xE4ngar \xE4r inte till\xE5tna","error.validation.enum-regex":"Minst ett v\xE4rde \xE4r ogiltigt. V\xE4rden ska ha minst ett alfabetiskt tecken f\xF6re det f\xF6rsta talet.","error.validation.minSupMax":"Can't be superior","error.validation.positive":"M\xE5ste vara ett positivt tal","error.validation.regex":"Regex-m\xF6nstret \xE4r ogiltigt","error.validation.relation.targetAttribute-taken":"Detta namn existerar i m\xE5let","form.attribute.component.option.add":"L\xE4gg till en komponent","form.attribute.component.option.create":"Skapa en komponent","form.attribute.component.option.create.description":"En komponent delas mellan inneh\xE5llstyper och komponenter, och \xE4r tillg\xE4nglig \xF6verallt.","form.attribute.component.option.repeatable":"Repeterbar komponent","form.attribute.component.option.repeatable.description":"B\xE4st f\xF6r flera t.ex ingredienser, metataggar m.m. (listor)","form.attribute.component.option.reuse-existing":"Anv\xE4nd en befintlig komponent","form.attribute.component.option.reuse-existing.description":"\xC5teranv\xE4nd en komponent som redan har skapats f\xF6r att h\xE5lla datastrukturen samma \xF6ver flera inneh\xE5llstyper.","form.attribute.component.option.single":"Eng\xE5ngskomponent","form.attribute.component.option.single.description":"B\xE4st f\xF6r att gruppera f\xE4lt som adress, huvudinneh\xE5ll, etc...","form.attribute.item.customColumnName":"Anpassade kolumnnamn","form.attribute.item.customColumnName.description":"Kan anv\xE4ndas f\xF6r att anpassa hur datan ser ut i API-svar","form.attribute.item.date.type.date":"datum (t.ex: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"datum och tid (t.ex: 01/01/{currentYear} 00:00)","form.attribute.item.date.type.time":"tid (t.ex: 00:00)","form.attribute.item.defineRelation.fieldName":"F\xE4ltnamn","form.attribute.item.enumeration.graphql":"Namn\xE4ndring f\xF6r GraphQL","form.attribute.item.enumeration.graphql.description":"L\xE5ter dig \xE4ndra det genererade namnet i GraphQL","form.attribute.item.enumeration.placeholder":`Ex:
morgon
middag
kv\xE4ll`,"form.attribute.item.enumeration.rules":"V\xE4rden (ett v\xE4rde per rad)","form.attribute.item.maximum":"St\xF6rsta v\xE4rde","form.attribute.item.maximumLength":"L\xE4ngsta l\xE4ngd","form.attribute.item.minimum":"Minsta v\xE4rde","form.attribute.item.minimumLength":"Kortaste l\xE4ngd","form.attribute.item.number.type":"Nummerformat","form.attribute.item.number.type.biginteger":"stort heltal (t.ex: 123456789)","form.attribute.item.number.type.decimal":"decimaltal (t.ex: 2.22)","form.attribute.item.number.type.float":"flyttal (t.ex: 3.33333333)","form.attribute.item.number.type.integer":"heltal (t.ex: 10)","form.attribute.item.privateField":"Privat f\xE4lt","form.attribute.item.privateField.description":"Detta f\xE4lt kommer inte att visas i API-svar","form.attribute.item.requiredField":"Obligatoriskt f\xE4lt","form.attribute.item.requiredField.description":"Du kommer inte kunna skapa posten om detta f\xE4ltet \xE4r tomt","form.attribute.item.text.regex":"RegEx-m\xF6nster","form.attribute.item.text.regex.description":"Texten f\xF6r RegEx-m\xF6nstret","form.attribute.item.uniqueField":"Unikt f\xE4lt","form.attribute.item.uniqueField.description":"Du kommer inte kunna skapa posten om det redan finns en annan post med samma v\xE4rde","form.attribute.media.allowed-types":"V\xE4lj till\xE5tna typer av medier","form.attribute.media.allowed-types.option-files":"Filer","form.attribute.media.allowed-types.option-images":"Bilder","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"Flera medier","form.attribute.media.option.multiple.description":"Till\xE5ter flera medier att v\xE4ljas i samma f\xE4lt, passar bra f\xF6r t.ex bildgallerier","form.attribute.media.option.single":"En media","form.attribute.media.option.single.description":"B\xE4st f\xF6r profilbilder eller andra bilder som bara f\xF6rekommer en g\xE5ng per post","form.attribute.settings.default":"Standardv\xE4rde","form.attribute.text.option.long-text":"L\xE5ng text","form.attribute.text.option.long-text.description":"B\xE4st f\xF6r beskrivningar eller andra l\xE4ngre texter. Fulltexts\xF6kning \xE4r inaktiverat.","form.attribute.text.option.short-text":"Kort text","form.attribute.text.option.short-text.description":"B\xE4st f\xF6r titlar, namn, l\xE4nkar (URL:er). Aktiverar fulltexts\xF6kning s\xF6kning f\xF6r f\xE4ltet.","form.button.add-components-to-dynamiczone":"L\xE4gg till komponenter till dynamiska zonen","form.button.add-field":"L\xE4gg till nytt f\xE4lt","form.button.add-first-field-to-created-component":"L\xE4gg till f\xF6rsta f\xE4ltet i komponenten","form.button.add.field.to.collectionType":"L\xE4gg till ett nytt f\xE4lt i samlingstypen","form.button.add.field.to.component":"L\xE4gg till ett nytt f\xE4lt i komponenten","form.button.add.field.to.contentType":"L\xE4gg till ett nytt f\xE4lt i inneh\xE5llstypen","form.button.add.field.to.singleType":"L\xE4gg till ett nytt f\xE4lt i eng\xE5ngstypen","form.button.cancel":"Avbryt","form.button.collection-type.description":"B\xE4st f\xF6r flera poster s\xE5som artiklar, produkter och kommentarer.","form.button.collection-type.name":"Samlingstyper","form.button.configure-component":"Konfigurera komponenten","form.button.configure-view":"Konfigurera visningen","form.button.select-component":"V\xE4lj en komponent","form.button.single-type.description":"B\xE4st f\xF6r poster som bara f\xF6rekommer en g\xE5ng s\xE5som startsida, om oss, m.m.","form.button.single-type.name":"Eng\xE5ngstyper",from:a,"listView.headerLayout.description":"Skapa datastrukturen f\xF6r ditt inneh\xE5ll","menu.section.components.name":"Komponenter","menu.section.models.name":"Samlingstyper","menu.section.single-types.name":"Eng\xE5ngstyper","modalForm.attribute.form.base.name.description":"Mellanslag till\xE5ts inte i namnet p\xE5 attributet","modalForm.attribute.form.base.name.placeholder":"t.ex titel, slug, canonicalUrl","modalForm.attribute.target-field":"Kopplat f\xE4lt","modalForm.attributes.select-component":"V\xE4lj komponent","modalForm.attributes.select-components":"V\xE4lj komponenter","modalForm.collectionType.header-create":"Skapa samlingstyp","modalForm.component.header-create":"Skapa komponent","modalForm.components.create-component.category.label":"V\xE4lj kategori eller ange namn p\xE5 ny kategori","modalForm.components.icon.label":"Ikon","modalForm.empty.button":"L\xE4gg till anpassade f\xE4lt","modalForm.empty.heading":"Inget h\xE4r \xE4nnu.","modalForm.empty.sub-heading":"Hitta det du letar efter genom ett brett utbud av till\xE4gg.","modalForm.editCategory.base.name.description":"Inget mellanslag f\xE5r finnas i namnet p\xE5 kategorin","modalForm.header-edit":"Redigera {name}","modalForm.header.categories":"Kategorier","modalForm.header.back":"Tillbaka","modalForm.singleType.header-create":"Skapa eng\xE5ngstyp","modalForm.sub-header.addComponentToDynamicZone":"L\xE4gg till ny komponent till dynamisk zon","modalForm.sub-header.attribute.create":"L\xE4gg till {type}-f\xE4lt","modalForm.sub-header.attribute.create.step":"L\xE4gg till ny komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Redigera {name}","modalForm.sub-header.chooseAttribute.collectionType":"V\xE4lj ett f\xE4lt f\xF6r samlingstypen","modalForm.sub-header.chooseAttribute.component":"V\xE4lj ett f\xE4lt f\xF6r komponenten","modalForm.sub-header.chooseAttribute.singleType":"V\xE4lj ett f\xE4lt f\xF6r eng\xE5ngstypen","modalForm.custom-fields.advanced.settings.extended":"Ut\xF6kade inst\xE4llningar","modalForm.tabs.custom":"Anpassat","modalForm.tabs.custom.howToLink":"Hur du l\xE4gger till anpassade f\xE4lt","modalForm.tabs.default":"Standard","modalForm.tabs.label":"Standard/anpassade-flikar","modelPage.attribute.relation-polymorphic":"Relation (polymorfisk)","modelPage.attribute.relationWith":"Relation med","notification.error.dynamiczone-min.validation":"Minst en komponent m\xE5ste vara vald f\xF6r en dynamisk zon f\xF6r att kunna spara inneh\xE5llstypen","notification.info.autoreaload-disable":"autoReload-funktionen kr\xE4vs f\xF6r att anv\xE4nda detta plugin. Starta servern med `strapi develop`","notification.info.creating.notSaved":"Spara ditt arbete innan du skapar en ny samlingstyp eller komponent","plugin.description.long":"Modellera datastrukturen f\xF6r ditt API. Skapa nya f\xE4lt och relationer p\xE5 bara en minut. Filerna skapas och uppdateras automatiskt i ditt projekt.","plugin.description.short":"Modellera datastrukturen f\xF6r ditt API.","plugin.name":"Inneh\xE5llstyps-skapare","popUpForm.navContainer.advanced":"Avancerade inst\xE4llningar","popUpForm.navContainer.base":"Grundl\xE4ggande inst\xE4llningar","popUpWarning.bodyMessage.cancel-modifications":"\xC4r du s\xE4ker p\xE5 att du vill avbryta dina \xE4ndringar?","popUpWarning.bodyMessage.cancel-modifications.with-components":"\xC4r du s\xE4ker p\xE5 att du vill avbryta dina \xE4ndringar? Vissa komponenter har skapats eller modifierats...","popUpWarning.bodyMessage.category.delete":"\xC4r du s\xE4ker p\xE5 att du vill ta bort den h\xE4r kategorin? Alla komponenter i den kommer ocks\xE5 att raderas.","popUpWarning.bodyMessage.component.delete":"\xC4r du s\xE4ker p\xE5 att du vill ta bort den h\xE4r komponenten?","popUpWarning.bodyMessage.contentType.delete":"\xC4r du s\xE4ker p\xE5 att du vill ta bort den h\xE4r samlingstypen?","popUpWarning.draft-publish.button.confirm":"Ja, inaktiverar","popUpWarning.draft-publish.message":"Om du inaktiverar Utkast/Publicera-systemet kommer dina utkast att raderas.","popUpWarning.draft-publish.second-message":"\xC4r du s\xE4ker p\xE5 att du vill inaktivera det?","prompt.unsaved":"\xC4r du s\xE4ker p\xE5 att du vill l\xE4mna? Dina \xE4ndringar kommer att f\xF6rsvinna.","relation.attributeName.placeholder":"Ex: f\xF6rfattare, kategori, tagg","relation.manyToMany":"har och tillh\xF6r m\xE5nga","relation.manyToOne":"har m\xE5nga","relation.manyWay":"har m\xE5nga","relation.oneToMany":"tillh\xF6r m\xE5nga","relation.oneToOne":"har och tillh\xF6r en","relation.oneWay":"har en","table.button.no-fields":"L\xE4gg till nytt f\xE4lt","table.content.create-first-content-type":"Skapa din f\xF6rsta samlingstyp","table.content.no-fields.collection-type":"L\xE4gg till ett f\xF6rsta f\xE4lt till samlingstypen","table.content.no-fields.component":"L\xE4gg till ett f\xF6rsta f\xE4lt i komponenten"}}}]);
