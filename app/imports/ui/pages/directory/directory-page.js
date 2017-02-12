import { Template } from 'meteor/templating';
import { Profiles } from '/imports/api/profile/ProfileCollection';

Template.Directory_Page.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
});

Template.Directory_Page.helpers({
  profiles() {
    return Profiles.find({}, { sort: { lastName: 1 } });
  },
});
