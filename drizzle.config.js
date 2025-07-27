/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://ai-interview-mocker_owner:0SWa4tYsIyMF@ep-quiet-night-a7ufs5rz.ap-southeast-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
  