const resolvers = {
  Query: {
    notes: (parent, args, { dataSources }, info) => {
      return dataSources.noteApi.getNotes();
    },
    note: (parent, args, { dataSources }, info) => {
      return dataSources.noteApi.getNote(args.id);
    },
  },
};
module.exports = resolvers;
