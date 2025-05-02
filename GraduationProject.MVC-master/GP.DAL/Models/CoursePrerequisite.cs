using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GP.DAL.Models
{
    public class CoursePrerequisite
    {
        public string CourseCode { get; set; }
        public Course Course { get; set; }

        public string? PrerequisiteCode { get; set; }
        public Course? Prerequisite { get; set; }
    }
}
