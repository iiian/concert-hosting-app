./cloud_sql_proxy -instances=rrgt-283806:us-central1:user-database-1=tcp:7001 &
./cloud_sql_proxy -instances=rrgt-283806:us-central1:venues-database=tcp:7000 &
./cloud_sql_proxy -instances=rrgt-283806:us-central1:credit-database=tcp:7002 &
./cloud_sql_proxy -instances=rrgt-283806:us-central1:payments-database=tcp:7003 &
./cloud_sql_proxy -instances=rrgt-283806:us-central1:content-database=tcp:7004 &
