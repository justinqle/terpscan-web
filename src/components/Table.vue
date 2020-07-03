<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
CloudKit.configure({
  containers: [
    {
      containerIdentifier: process.env.VUE_APP_CONTAINER_ID,
      apiTokenAuth: {
        apiToken: process.env.VUE_APP_API_TOKEN
      },
      environment: "development"
    }
  ]
});
const container = CloudKit.getDefaultContainer();
const publicDatabase = container.publicCloudDatabase;

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: "tracking_number",
          label: "Tracking Number"
        },
        {
          field: "carrier",
          label: "Carrier"
        },
        {
          field: "date",
          label: "Date",
          centered: true
        }
      ]
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    getPackages() {
      const currentUser = "Justin Le";
      const queryUser = {
        recordType: "CD_Mailbox",
        filterBy: [
          {
            comparator: "EQUALS",
            fieldName: "CD_firstName",
            fieldValue: { value: currentUser.split(" ")[0] }
          },
          {
            comparator: "EQUALS",
            fieldName: "CD_lastName",
            fieldValue: { value: currentUser.split(" ")[1] }
          }
        ]
      };
      publicDatabase
        .performQuery(queryUser)
        .then(response => {
          if (response.hasErrors) {
            throw response.errors[0];
          } else {
            if (response.records.length != 1) {
              throw `${response.records.length} users returned instead of 1 user!`;
            }
            const userUUID = response.records[0].recordName;
            const queryPackages = {
              recordType: "CD_Package",
              filterBy: [
                {
                  comparator: "EQUALS",
                  fieldName: "CD_recipient",
                  fieldValue: { value: userUUID }
                }
              ]
            };
            return publicDatabase.performQuery(queryPackages);
          }
        })
        .then(response => {
          if (response.hasErrors) {
            throw response.errors[0];
          } else {
            this.data = response.records.map(record => {
              return {
                tracking_number: record.fields.CD_trackingNumber.value,
                carrier: record.fields.CD_carrier.value,
                date: record.fields.CD_timestamp.value
              };
            });
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>