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
    barchart(callback)
    {
        return db.query("select c.course_name as Course, count(*)as student from review r,internship i,student s,course c where r.internship_id=i.internship_id and i.student_id=s.student_id and s.course_id=c.course_id group by c.course_name",callback);
    },
    pichart(callback)
    {
            return db.query("SELECT l.location_name as city,count(*) as cnt FROM review as r join internship as i join location as l on(i.internship_id=r.internship_id) and (l.location_id=i.location_id) group BY l.location_name",callback);
    },
    linechart(callback)
    {
        return db.query("select year(start_date) as year,count(*) as cnt from internship GROUP BY year(start_date)",callback);
    }
};

module.exports=dashboard;
