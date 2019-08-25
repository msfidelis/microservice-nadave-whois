# Whois Microservice "Nadavê"

Using this shit to implement microservices tests on containers. 

This is a 5 minute implementation. Don't use this like reference for nothing. 

### How to create setup with docker

```sh
docker run -it -p 8080:8080 msfidelis/whois:v1

```

## How to use 

```sh
curl localhost:8080/whois/google.com 
```

```
{
  "domainName": "google.com",
  "registryDomainId": "2138514_DOMAIN_COM-VRSN",
  "registrarWhoisServer": "whois.markmonitor.com",
  "registrarUrl": "http://www.markmonitor.com",
  "updatedDate": "2018-02-21T10:45:07-0800",
  "creationDate": "1997-09-15T00:00:00-0700",
  "registrarRegistrationExpirationDate": "2020-09-13T21:00:00-0700",
  "registrar": "MarkMonitor, Inc.",
  "registrarIanaId": "292",
  "registrarAbuseContactEmail": "abusecomplaints@markmonitor.com",
  "registrarAbuseContactPhone": "+1.2083895740",
  "domainStatus": "clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited) clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited) clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited) serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited) serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited) serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)",
  "registrantOrganization": "Google LLC",
  "registrantStateProvince": "CA",
  "registrantCountry": "US",
  "adminOrganization": "Google LLC",
  "adminStateProvince": "CA",
  "adminCountry": "US",
  "techOrganization": "Google LLC",
  "techStateProvince": "CA",
  "techCountry": "US",
  "nameServer": "ns3.google.com ns4.google.com ns2.google.com ns1.google.com",
  "dnssec": "unsigned",
  "urlOfTheIcannWhoisDataProblemReportingSystem": "http://wdprs.internic.net/",
  "lastUpdateOfWhoisDatabase": "2019-08-22T18:51:04-0700 <<<"
}
```

