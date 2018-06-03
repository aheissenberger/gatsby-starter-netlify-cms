# Setup
 * create s3 bucket with public access
 * s3 bucket set as website, default "index.html" and copy pasete redirects aws-s3-redirects.xml
 * CloudFront: do not include origin as S3 Bucket - use the bucket domainname for the bucket website!!

# Build Pipeline
 * create AWS CodePipeline

# Resources
 * s3 redirect XML generator http://sukharevd.net/static/files/blog/s3routes/index.html

xxxxx