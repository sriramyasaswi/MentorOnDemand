﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AdminLibrary.Dto
{
   public class CourseDto
    {

        [Required]
        public int Id { get; set; }
        [Required]
        public string CourseName { get; set; }
        public string CourseDesc { get; set; }

        [Required]
        public Timings CTimings { get; set; }
        [Required]
        public int Fee { get; set; }
    }
}
