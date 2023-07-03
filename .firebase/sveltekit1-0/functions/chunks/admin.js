import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "sveltekit1-0";
const FB_CLIENT_EMAIL = "firebase-adminsdk-i6pff@sveltekit1-0.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5w9T0VfnWzPRb\nCE7aJo+3rYasDeNoEzOUYoY7OZJBB0wnFXTYam54fs8wT1ZP9d6h19Miy3EY8hR0\nS1PuEB/R5KXFyWeKvtSkGkdUXWkZMH9C1x6dodPGA9/IvwcMMP6BvSH99GjSwsmu\njfw+YYeLUJXXXpDR7r0p2A59C0VQchwfIECgjWScvnhqSAXnyvrkGiO4SleXKPM4\nuKmAnBDcsSce5RR+LD7YQCIVC2tzoCvSqptek4hxyRGxJdgvY8hKYcAZch0hnihJ\nNdEGr7iLxocjTDsC3b54YcWBlU/670ViEP7guKBDA0qIZ1kJbHELuO/qBruEhYvX\nc8tj6qcVAgMBAAECggEALHMzVvbmpjMbKlgx1AnjnEopnixhlJL5peEwaOYE/Mnz\n+ysrbyiCgBMp3Q+y4cW9rMDRvPLswFEWu2AV+HJDxuvdDdd8TusMQyslk8aZQiWE\nYhhK82GYZLqjFuw80bo8gAtjYZrU5U+mRj4j1EJullOlUyhF43HqsiNIjju+7XlD\n9hy/mdS6iUTY9Y0H5WPEWBcz+0r3pm6rJU4n+xFtcs2Bj8dGk1lRmFVpmlC482Zg\n09Ls05p+EgXK0w1lGciJkN7PH0DnZY43AcJSNUKfDR4aC0Vs8m9c93A+Mz/olqab\nrBUbO0OOc2vH8jlC3h21rjJ0KoHt66QeyhqXxDqAIQKBgQDoXRbJ1lgdZJSRXLum\nuRIauLKmMIOTLH/GneNZjNtjZzSbbGWx5nTAbMk1mR+Yht9f6lW+RlF7R57HV4Fs\ngYVW5eA9RRJlds+xCUtvXZct/L9eD+H+Ex/+k10/lTlZBD+xBqnCSpk/s1hKQfFq\ndF07dLqL4W/W+Ua9TYUINdWiYQKBgQDMqUf8/nde9rYvafJDalyhC1JEXYqJxZJv\nzUSA3pwMeisZj/97wVFkUGf95Q0TvGoTcXWBq/3Nmq1li6t6gudz2uUNFBSlVMYC\nM7H6624V9rdH8JUn/XYNlk3+iuctIdIY0AfVgp9A17ixBuBqor8VM/+c/sO0i0b+\nqQ7Bwz6pNQKBgDbEkjV6nwQ2i8oDWHuAjaLcu8buEmUjDO7skgSubZttXPnxP7sB\nva0JNxe6Ard5urapzhHuExCCngsQNgI0ORB1WDg4ypA9w9BPh4c1QQfm1dg+2B6B\ntX3UkBsHeh/gH38DOgoAeUSJahr+lf9oc/0qkzmbJjg+Qw0lc2CvB66hAoGAdkvO\nsXyAkSJ3cfaCMtdyzR9XIO8UmcfaeccjNn31ovymlvL10JmQKzSSt13C7kp04eIt\n8pLwc/xZB53wszKhCAVZafLWcC4M+c7ZrFiS3B0sGWgFPwUxTG85i8zMDPlEkFUG\ngjIrTPaj6ac45kpFusLAmAVmJ6Btm9sqDXOGb5UCgYBB+GsSftlPoz/B2SHJrDVT\n3gpufYEbJbAnZPnYSr7dDUxfnmbv5PFCMeob9FYea5puYnq6gyB59CJeBdJNHnso\nwIILZI690FR/3ZGBQ6Jm0FE4u6j90/00TjK+oAIpZH+r5vkZJkFfNF595tAV2yGS\nxRsEmMEp2DA0MblOLIpbcQ==\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
