import {
  getCommunityEvent,
  getCommunityEvents,
  createCommunityEvent,
  updateCommunityEvent,
  deleteCommunityEvent
} from '../../dataLayer/mongo/communityEvent';

export const communityEventResolvers = {
  Query: {
    getCommunityEvent,
    getCommunityEvents
  },
  Mutation: {
    createCommunityEvent,
    updateCommunityEvent,
    deleteCommunityEvent
  }
};
