var db=require('../dbconnection');
var dashboard={
    getCompanyCount(callback)
    {
        return db.query("select count(*) as companycnt from companies",callback);
    },
    getInternshipCount(callback)
    {
        return db.query("select count(*) as internshipcnt from internship",callback);
    },
    getreviewCount(callback)
    {
        return db.query("select count(*) as reviewcnt from review",callback);
    },
    getstudentCount(callback)
    {
        return db.query("select count(*) as studentcnt from student",callback);
    },
    getlatest5reviews(callback)
    {
        return db.query("select * from review DESC by review_date limit 5",callback);
    },
    pichart(callback)
    {
            return db.query("SELECT l.location_name as city,count(*) as cnt FROM review as r join internship as i join location as l on(i.internship_id=r.internship_id) and (l.location_id=i.location_id) group BY l.location_name",callback);
    }
};

module.exports=dashboard;
