﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Models
{
   public class Trainings
    {
        public int Id { get; set; }
        
        public int Progress { get; set; }
        public double commissionAmount { get; set; }
     
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Timings Timings { get; set; }
        public double amountReceived { get; set; }
        public string userId { get; set; }
        public string userFirstName { get; set; }
        public string userLastName { get; set; }

        public string mentorId { get; set; }
        public string mentorFirstName { get; set; }
        public string mentorLastName { get; set; }

        public int courseId { get; set; }
        public string CourseName { get; set; }
      
        public bool PaymentStatus { get; set; }
    }
}
