using AdminLibrary.Dto;
using AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AdminLibrary.Data
{
    public class AdminRepository : IAdminRepository
    {

        AdminDBContext context;


        public AdminRepository(AdminDBContext context)
        {
            this.context = context;
        }
        public bool AddCourse(CourseDto courseDto)
        {
            try
            {
                var course = new Course
                {
                    CourseName = courseDto.CourseName,
                    Fee = courseDto.Fee,
                    CTimings = courseDto.CTimings,
                    CourseDesc = courseDto.CourseDesc

                };
                context.Course.Add(course);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool BlockUser(string id)
        {
            {
                var userblock = context.MODUsers.SingleOrDefault(u => u.Id == id);
                userblock.IsActive = !userblock.IsActive;
            }
            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool DeleteCourse(Course course)
        {
            try
            {
                context.Course.Remove(course);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Course GetCourse(int id)
        {
            return this.context.Course.Find(id);
        }

        public Course GetCoursebyName(string name)
        {
            return this.context.Course.Find(name);
        }

        public IEnumerable<CourseListDto> GetCourses()
        {
            return this.context.Course.Select(c => new CourseListDto
            {
                Id = c.Id,
                CourseName = c.CourseName,
                Fee = c.Fee,

                CourseDesc = c.CourseDesc,
                CTimings = c.CTimings

            });
        }


        public IEnumerable<MODUser> GetMentors()
        {
            var mentors = from a in context.MODUsers
                          join ma in context.UserRoles on a.Id equals ma.UserId
                          where ma.RoleId == "2"
                          select a;
            return mentors;
        }

        public IEnumerable<MODUser> GetStudents()
        {
            var stud = from a in context.MODUsers
                       join ma in context.UserRoles on a.Id equals ma.UserId
                       where ma.RoleId == "3"
                       select a;
            return stud;
        }

        public bool UpdateCourse(Course course)
        {
            try
            {
                context.Course.Update(course);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}